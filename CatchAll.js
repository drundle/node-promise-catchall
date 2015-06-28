var rsvp = require('RSVP');
var when = require('when');
var PromiseMonitor = require('when/monitor/PromiseMonitor');
var CatchAll = (function () {
    function CatchAll() {
        this._loggers = [];
        this._then = function () { process.exit(1); };
    }
    CatchAll.prototype.addLogger = function (logFunc) {
        this._loggers.push(logFunc);
    };
    CatchAll.prototype.setup = function () {
        var _this = this;
        //handle when promises, uncaugh exceptions
        var promiseMonitor = new PromiseMonitor({
            log: function (err) {
                _this.log(err);
                _this._then();
            }
        });
        promiseMonitor.monitor(when.Promise);
        //handle node uncaught exceptions
        process.on("uncaughtException", function (err) {
            _this.log(err);
            _this._then();
        });
        //handle rsvp uncauught exceptions
        rsvp.on("error", function (err) {
            _this.log(err);
            _this._then();
        });
    };
    Object.defineProperty(CatchAll.prototype, "then", {
        set: function (value) {
            this._then = value;
        },
        enumerable: true,
        configurable: true
    });
    CatchAll.prototype.log = function (err) {
        this._loggers.forEach(function (log) {
            log(err);
        });
    };
    return CatchAll;
})();
exports.CatchAll = CatchAll;
//# sourceMappingURL=CatchAll.js.map