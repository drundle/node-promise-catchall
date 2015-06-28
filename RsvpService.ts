import rsvp = require('RSVP');
var Promise = rsvp.Promise;

export class RsvpService {

	deposit(): Promise<string> {
		var p = new Promise<string>((resolve, reject) => {
			throw new Error('I Died');
		});

		setTimeout(function() {
			p.catch(function(e) {
				// ... handled ...
			});
		}, 1000);
		return p;
	}

}