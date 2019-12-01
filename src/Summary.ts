import { OutputTarget } from './interfaces/OutputTarget';
import { Analyzer } from './interfaces/Analyzer';
import { MatchData } from './tuples/MatchData';

export class Summary {
  static  (){

  }
	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

	builAndPrintRerport(matches: MatchData[]): void {
		const output: string = this.analyzer.run(matches);
		 this.outputTarget.print(output);
	}
}
