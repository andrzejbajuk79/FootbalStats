import { OutputTarget } from './../interfaces/OutputTarget';

export class ConsoleReports implements OutputTarget {
	print(report: string) {
		console.log(report);
	}
}
