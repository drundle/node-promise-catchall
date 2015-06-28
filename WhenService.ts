import when = require('when');


export class WhenService {

	deposit(): any {
		var p = when.promise((resolve, reject) => {
			throw new Error('when died too');
		})


		setTimeout(function() {
			p.catch(function(e) {
				// ... handled ...
			});
		}, 1000);
		return p;
	}

}