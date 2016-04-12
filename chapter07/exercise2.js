function fromUSAtoJapanDate(americanDate) {
    var regexp = /^([0-9]{2})\/([0-9]{2})\/([0-9]{1,4})$/i;
    var dateArr = americanDate.match(regexp);
    if (!dateArr) return "wrong value";
    var japanDate = dateArr[3] + "年" + dateArr[1] + "月" + dateArr[2] + "日";
    var holiday = holidays[parseInt(dateArr[1] + dateArr[2])];
    return japanDate + (holiday ? "(" + holiday + ")" : "");
}

var holidays = {
    101: "New Year's Day",
    211: "Foundation Day",
    321: "Vernal Equinox Day",
    429: "Showa Day",
    503: "Constitution Memorial Day",
    504: "Greenery Day",
    505: "Children's Day",
    811: "Mountain Day",
    923: "Autumnal Equinox Day",
    1103: "Culture Day",
    1123: "Labour Thanksgiving Day",
    1223: "The Emperor's Birthday"
}

var japanDate = fromUSAtoJapanDate("12/23/2014");
console.log(japanDate);