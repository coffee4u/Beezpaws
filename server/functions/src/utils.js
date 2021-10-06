
exports.getDefaultPostalCode = (abbr) => {
  switch (abbr) {
    case "NL":
      return;
    case "NS":
      return;
    case "PE":
      return;
    case "NB":
      return;
    case "QC":
      return;
    case "ON":
      return;
    case "MB":
      return;
    case "SK":
      return;
    case "AB":
      return;
    case "BC":
      return;
    case "NU/NT":
      return;
    case "YT":
      return;
  }
};

const getProvinceAbbr = (postalCode) => {
  const code = postalCode.subString(0, 1).toUpperCase();
  switch (code) {
    case "A":
      return "NL"; // Newfoundland and Labrador
    case "B":
      return "NS"; // Nova Scotia
    case "C":
      return "PE"; // Prince Edward Island
    case "E":
      return "NB"; // New Brunswick
    case "G":
    case "H":
    case "J":
      return "QC"; // Quebec
    case "K":
    case "L":
    case "M":
    case "N":
    case "P":
      return "ON"; // Ontario
    case "R":
      return "MB"; // Manitoba
    case "S":
      return "SK"; // Saskatchewan
    case "T":
      return "AB"; // Alberta
    case "V":
      return "BC"; // British Columbia
    case "X":
      return "NU/NT"; // Nunavut / Northwest Territories
    case "Y":
      return "YT"; // Yukon
  }
};
const getFullNameByAbbr = (abbr) => {
  switch (abbr) {
    case "NL":
      return "Newfoundland and Labrador";
    case "NS":
      return "Nova Scotia";
    case "PE":
      return "Prince Edward Island";
    case "NB":
      return "New Brunswick";
    case "QC":
      return "Quebec";
    case "ON":
      return "Ontario";
    case "MB":
      return "Manitoba";
    case "SK":
      return "Saskatchewan";
    case "AB":
      return "Alberta";
    case "BC":
      return "British Columbia";
    case "NU/NT":
      return "Nunavut / Northwest Territories";
    case "YT":
      return "Yukon";
  }
};

exports.getProvinceAbbrByPostalCode = (postalCode) => {
  return getProvinceAbbr(postalCode);
};

exports.getProvinceFullNameByPostalCode = (postalCode) => {
  const abbr = getProvinceAbbr(postalCode);
  return getFullNameByAbbr(abbr);
};
