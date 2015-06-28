import { CatchAll } from './CatchAll'
import { RsvpService } from './RsvpService';
import { WhenService } from './WhenService';
import { Service } from './Service';

var catchAll = new CatchAll();
catchAll.setup();
catchAll.addLogger((err) => { console.error(err); });

/*
//do nothing (only log) on catch all.
catchAll.then = () => {};
*/

//each of the following sevices crash.
var s1 = new RsvpService();
s1.deposit();

var s2 = new WhenService();
s2.deposit();

var s3 = new Service();
s3.deposit();

setInterval(() => { }, 1000);