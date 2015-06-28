import rsvp = require('RSVP');
import when = require('when');
var PromiseMonitor = require('when/monitor/PromiseMonitor');

export class CatchAll {

	private _loggers: Array<(err: any) => void> = [];
	private _then: () => void = () => { process.exit(1); };


	addLogger(logFunc: (err: any) => void): void {
		this._loggers.push(logFunc);
	}

	setup(): void {
		
		//handle when promises, uncaugh exceptions
		var promiseMonitor = new PromiseMonitor(
			{
				log: (err: any) => {
					this.log(err);
					this._then();
				}
			});
		promiseMonitor.monitor((<any>when).Promise);
	
	
		//handle node uncaught exceptions
		process.on("uncaughtException", (err: any) => {
			this.log(err);
			this._then();
		});
	
	
		//handle rsvp uncauught exceptions
		rsvp.on("error", (err: any) => {
			this.log(err);
			this._then();
		});
		
	}

	set then(value: () => void) {
		this._then = value;
	}

	private log(err: any): void {
		this._loggers.forEach((log: (e: any) => void) => {
			log(err);
		});
	}
}