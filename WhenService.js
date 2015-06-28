var when = require('when');
var WhenService = (function () {
    function WhenService() {
    }
    WhenService.prototype.deposit = function () {
        var p = when.promise(function (resolve, reject) {
            throw new Error('when died too');
        });
        setTimeout(function () {
            p.catch(function (e) {
                // ... handled ...
            });
        }, 1000);
        return p;
    };
    return WhenService;
})();
exports.WhenService = WhenService;
//# sourceMappingURL=WhenService.js.map