var CatchAll_1 = require('./CatchAll');
var RsvpService_1 = require('./RsvpService');
var WhenService_1 = require('./WhenService');
var Service_1 = require('./Service');
var catchAll = new CatchAll_1.CatchAll();
catchAll.setup();
catchAll.addLogger(function (err) { console.error(err); });
/*
//do nothing (only log) on catch all.
catchAll.then = () => {};
*/
//each of the following sevices crash.
var s1 = new RsvpService_1.RsvpService();
s1.deposit();
var s2 = new WhenService_1.WhenService();
s2.deposit();
var s3 = new Service_1.Service();
s3.deposit();
setInterval(function () { }, 1000);
//# sourceMappingURL=App.js.map