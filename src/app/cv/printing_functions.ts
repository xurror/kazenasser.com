import ExcelJS from "exceljs";

enum EntriesColumns {
  ID = 0,
  SECTION = 1,
  TITLE = 2,
  LOC = 3,
  INSTITUTION = 4,
  START = 5,
  END = 6,
  DESCRIPTION_1 = 7,
  DESCRIPTION_2 = 8,
  DESCRIPTION_3 = 9,
  DESCRIPTION_MD = 10,
  IN_RESUME = 11,
}

enum TextBlocksColumns {
  ID = 0,
  LOC = 1,
  TEXT = 2,
}

enum SkillsColumns {
  ID = 0,
  SKILL = 1,
  LEVEL = 2,
}

enum ContactInfoColumns {
  ID = 0,
  LOC = 1,
  ICON = 2,
  CONTACT = 3,
}

type SectionEntry = {
  title: string;
  loc: string;
  institution: string;
  timeline: string;
  description_bullets: string | string[];
};

type TextBlock = {
  loc: string;
  text: string;
};

type Skill = {
  skill: string;
  level: string;
};

type ContactInfo = {
  loc: string;
  icon: string;
  contact: string;
};

export class CVPrinter {
  pdfMode: boolean;
  links: string[];
  entriesData: ExcelJS.Worksheet | undefined;
  skills: ExcelJS.Worksheet | undefined;
  textBlocks: ExcelJS.Worksheet | undefined;
  contactInfo: ExcelJS.Worksheet | undefined;

  constructor(pdfMode: boolean = false, resumeMode: boolean = false) {
    this.pdfMode = pdfMode;
    this.links = [];
  }

  async init(dataLocation: string) {
    await this.readExcel(dataLocation);
    return this;
  }

  async readExcel(dataLocation: string) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(dataLocation);

    this.entriesData = workbook.getWorksheet(1);
    this.skills = workbook.getWorksheet(2);
    this.textBlocks = workbook.getWorksheet(3);
    this.contactInfo = workbook.getWorksheet(4);
  }

  extractYear(date: string | undefined): string | undefined {
    if (!date) return;

    const reg = /(20|19)[0-9]{2}/g;
    const match = reg.exec(date);
    if (!match) return;

    const year = match[0];
    return year;
  }

  parseDates(date: string | undefined): string | undefined {
    if (!date) return;

    const reg = /(\w+|\d+)(?=(\s|\/|-)(20|19)[0-9]{2})/g;
    const match = reg.exec(date);
    if (!match) return;

    const month = match[0];
    return month + "-" + this.extractYear(date);
  }

  sanitizeLinks(text: string | string[]): string | string[] {
    function sanitize(text: string, links: string[]) {
      const linkTitles =
        text.match(/\[(.+?)\]/g)?.map((x) => x.slice(1, -1)) || [];
      const linkDestinations =
        text.match(/\((.+?)\)/g)?.map((x) => x.slice(1, -1)) || [];

      linkDestinations.forEach((destination, index) => {
        links.push(destination);
        const superscript = `<sup>${links.length}</sup>`;
        text = text.replace(
          `[${linkTitles[index]}](${destination})`,
          `${linkTitles[index]}${superscript}`
        );
      });
    }

    if (this.pdfMode) {
      if (Array.isArray(text)) {
        text.forEach((item) => {
          sanitize(item, this.links);
        });
      } else {
        sanitize(text, this.links);
      }
    }

    return text;
  }

  printSection(sectionId: string): SectionEntry[] {
    const sectionData: SectionEntry[] = [];

    (
      this.entriesData!!.getSheetValues() as unknown as ExcelJS.CellValue[][]
    ).forEach((row: ExcelJS.CellValue[], rowNumber: number) => {
      if (row[1] == sectionId) {
        const start = row[EntriesColumns.START];
        const end = row[EntriesColumns.END];
        const start_year = this.extractYear(start as string);
        const end_year = this.extractYear(end as string);

        let timeline = "N/A";
        if (!start_year && end_year) {
          timeline = end_year;
        } else if (start_year && !end_year) {
          timeline = `Current - ${start_year}`;
        } else if (!!start_year && !!end_year) {
          if (start_year == end_year) {
            timeline = end_year;
          } else {
            timeline = `${start_year} - ${end_year}`;
          }
        }

        sectionData.push({
          title: this.sanitizeLinks(
            row[EntriesColumns.TITLE] as string
          ) as string,
          loc: row[EntriesColumns.LOC] as string,
          timeline: timeline,
          institution: row[EntriesColumns.INSTITUTION] as string,
          description_bullets: this.sanitizeLinks(
            (row[EntriesColumns.DESCRIPTION_MD] as string)
              .slice(2)
              .split("\n- ") ?? [
              row[EntriesColumns.DESCRIPTION_1],
              row[EntriesColumns.DESCRIPTION_2],
              row[EntriesColumns.DESCRIPTION_3],
            ]
          ),
        });
      }
    });

    sectionData.forEach((entry: SectionEntry, index: any) => {
      ["title", "description_bullets"].forEach((col) => {
        const stripRes = this.sanitizeLinks(entry[col as keyof SectionEntry]);
        sectionData[index][col as keyof SectionEntry] = stripRes as any;
      });
    });

    return sectionData;
  }

  printTextBlock(label: string): TextBlock[] {
    const textBlockData = [] as TextBlock[];
    (
      this.textBlocks!!.getSheetValues() as unknown as ExcelJS.CellValue[][]
    ).forEach((row: ExcelJS.CellValue[], rowNumber: number) => {
      if (row[TextBlocksColumns.LOC] == label) {
        textBlockData.push({
          loc: row[TextBlocksColumns.LOC] as string,
          text: this.sanitizeLinks(
            row[TextBlocksColumns.TEXT] as string
          ) as string,
        });
      }
    });
    return textBlockData;
  }

  printSkillBars(
    outOf: number = 5,
    barColor: string = "#969696",
    barBackground: string = "#d9d9d9"
  ): Skill[] {
    const glueTemplate = `
<div class='skill-bar' style="background:linear-gradient(to right, ${barColor} {width_percent}%, ${barBackground} {width_percent}% 100%)">{skill}</div>`;

    const skills = [] as Skill[];
    (
      this.skills!!.getSheetValues() as unknown as ExcelJS.CellValue[][]
    ).forEach((row: ExcelJS.CellValue[], rowNumber: number) => {
      skills.push({
        skill: row[SkillsColumns.SKILL] as string,
        level: row[SkillsColumns.LEVEL] as string,
      });
    });
    return skills;

    // this.skills.forEach((skill: any) => {
    //   const widthPercent = Math.round((100 * skill.level) / outOf);
    //   const skillBar = glueTemplate
    //     .replace("{width_percent}", widthPercent.toString())
    //     .replace("{skill}", skill.skill);
    //   console.log(skillBar);
    // });
  }

  printLinks(): void {
    if (this.links.length > 0) {
      console.log(
        "\nLinks\n--------------------------------------------------------------------------------\n\n<br>\n"
      );
      this.links.forEach((link, index) => {
        console.log(`${index + 1}. ${link}`);
      });
    }
  }

  printContactInfo(): ContactInfo[] {
    const contact_infos = [] as ContactInfo[];
    (
      this.contactInfo!!.getSheetValues() as unknown as ExcelJS.CellValue[][]
    ).forEach((row: ExcelJS.CellValue[], rowNumber: number) => {
      contact_infos.push({
        loc: row[ContactInfoColumns.LOC] as string,
        icon: row[ContactInfoColumns.ICON] as string,
        contact: row[ContactInfoColumns.CONTACT] as string,
      });
    });
    return contact_infos;
    // this.contactInfo.forEach((info: any) => {
    //   console.log(`- <i class='fa fa-${info.icon}'></i> ${info.contact}`);
    // });
  }
}
