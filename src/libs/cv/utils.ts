export const loadCVData = async () => {
  const data = await import("#/data/cv/data.json");
  type Data = typeof data.default;
  type DataKey = keyof Data;

  const sortCvData = (data: Data) => {
    const sortedData: Data = {} as Data;
    Object.keys(data).forEach((key) => {
      if (key !== "default") {
        const sectionData = data[key as DataKey];
        if (Array.isArray(sectionData)) {
          sectionData.sort((a, b) => {
            const aStart = a.When.split(" - ")[0];
            const bStart = b.When.split(" - ")[0];
            return parseDate(bStart).getTime() - parseDate(aStart).getTime();
          });
          sortedData[key as DataKey] = sectionData as any;
        }
      }
    });
    return sortedData;
  };

  return sortCvData(data);
};

export const parseDate = (dateString: string): Date => {
  let date;

  // Check for 'MM/YYYY' format
  const mmYYYYRegex = /^(\d{2})\/(\d{4})$/;
  const yyyyRegex = /^(\d{4})$/;

  if (mmYYYYRegex.test(dateString)) {
    const match = dateString.match(mmYYYYRegex);
    if (!match) {
      throw new Error("Invalid date format");
    }
    const [_, month, year] = match;
    date = new Date(parseInt(year), parseInt(month) - 1); // Month is 0-indexed in JavaScript Date
  } else if (yyyyRegex.test(dateString)) {
    const year = dateString;
    date = new Date(parseInt(year), 0); // Default to January
  } else {
    throw new Error("Invalid date format");
  }

  return date;
};
