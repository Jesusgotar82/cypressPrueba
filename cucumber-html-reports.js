const report = require("multiple-cucumber-html-reporter");

var todayDate = new Date().toISOString();

report.generate({
  pageTitle: "Automation report",
  reportName:"Reporte regresion completa",
  displayDuration:"true",
  durationInMS:"true",
  openReportInBrowser:"true",

  //PATHS
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport--" + todayDate,

  //METADATA
  metadata: {
    browser: {
      name: "chrome",
      version: "v104",
    },
    device: "Local test machine",
    platform: {
      name: "osx",
      version: "10.15.7",
    },
  },
});