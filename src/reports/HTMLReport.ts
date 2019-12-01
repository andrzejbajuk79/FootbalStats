import { OutputTarget } from './../interfaces/OutputTarget';
import fs from 'fs';

export class HTMLReport implements OutputTarget {
	print(report: string): void {
		const html = `<div>
  <h1>Analysis Output</h1>
    <div>${report}</div>
  </div>
  `;
		// tworzymy nasza  strone html
		fs.writeFileSync('report.html', html);
	}
}
