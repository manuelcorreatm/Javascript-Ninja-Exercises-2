var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleDateString("jp"));
// → "12/11/2012" if run in en-US locale with time zone America/Los_Angelesese