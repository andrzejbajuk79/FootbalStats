import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalyzis } from './analyzers/WinsAnalyzis';
import { HTMLReport } from './reports/HTMLReport';

const matchReader = MatchReader.fromCsv('football.csv');

const summary = new Summary(
	new WinsAnalyzis('Arsenal'),
	// new ConsoleReports()
	new HTMLReport()
);
matchReader.load();
summary.builAndPrintRerport(matchReader.matches);
