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
  location: string;
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
  entriesData: ExcelJS.Worksheet | undefined;
  skills: ExcelJS.Worksheet | undefined;
  textBlocks: ExcelJS.Worksheet | undefined;
  contactInfo: ExcelJS.Worksheet | undefined;

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
          title: row[EntriesColumns.TITLE] as string,
          location: row[EntriesColumns.LOC] as string,
          timeline: timeline,
          institution: row[EntriesColumns.INSTITUTION] as string,
          description_bullets: (row[EntriesColumns.DESCRIPTION_MD] as string).slice(2).split("\n- ") ?? [
              row[EntriesColumns.DESCRIPTION_1],
              row[EntriesColumns.DESCRIPTION_2],
              row[EntriesColumns.DESCRIPTION_3],
            ],
        });
      }
    });

    sectionData.forEach((entry: SectionEntry, index: any) => {
      ["title", "description_bullets"].forEach((col) => {
        const stripRes = entry[col as keyof SectionEntry];
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
          text: row[TextBlocksColumns.TEXT] as string,
        });
      }
    });
    return textBlockData;
  }

  printSkillBars(): Skill[] {
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
  }
}
