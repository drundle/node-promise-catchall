var rsvp = require('RSVP');
var Promise = rsvp.Promise;
var RsvpService = (function () {
    function RsvpService() {
    }
    RsvpService.prototype.deposit = function () {
        var p = new Promise(function (resolve, reject) {
            throw new Error('I Died');
        });
        setTimeout(function () {
            p.catch(function (e) {
                // ... handled ...
            });
        }, 1000);
        return p;
    };
    return RsvpService;
})();
exports.RsvpService = RsvpService;
//# sourceMappingURL=RsvpService.js.map