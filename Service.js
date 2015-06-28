var Service = (function () {
    function Service() {
    }
    Service.prototype.deposit = function () {
        throw new Error('I Died');
    };
    return Service;
})();
exports.Service = Service;
//# sourceMappingURL=Service.js.map