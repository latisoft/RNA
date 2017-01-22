
import {emitEID}    from  '../helper/event.js';
import {netLoad}    from  '../helper/network.js';

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
const _debug_ = false;


class Store {
  constructor() {
    // get data from mongoDB by user@password
    this.pieData =[ {name: "Firefox", y: 6},
                    {name: "MSIE",    y: 4},
                    {name: "Safari",  y: 4},
                    {name: "Opera",   y: 1},
                    {name: "Chrome",  y: 7} ];



  }
  api() {

  }
}
const store = new Store();
console.log("store: ", store);
module.exports = store;
