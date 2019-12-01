"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalyzis_1 = require("./analyzers/WinsAnalyzis");
var HTMLReport_1 = require("./reports/HTMLReport");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = new Summary_1.Summary(new WinsAnalyzis_1.WinsAnalyzis('Arsenal'), 
// new ConsoleReports()
new HTMLReport_1.HTMLReport());
matchReader.load();
summary.builAndPrintRerport(matchReader.matches);
