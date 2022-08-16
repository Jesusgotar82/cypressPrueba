var reporter = require('cucumber-html-reporter');

var todayDate = new Date().toISOString();

var options = {
        theme: 'bootstrap',
        jsonFile: 'jsonlogs/log.json',
        output: 'reports2/cucumber_report_'+todayDate+'.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        name: "Reporte de Prueba",
        brandTitle: "Titulo de prueba",
        scenarioTimestamp:"true",
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);