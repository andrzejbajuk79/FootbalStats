import { MatchData } from '../tuples/MatchData';

export interface Analyzer {
	run(matches: MatchData[]): string;
}
