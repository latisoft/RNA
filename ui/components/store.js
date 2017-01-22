
import {emitEID}    from  '../lib/helper.js';
import {netLoad}    from  '../lib/helper.js';

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
const _debug_ = false;


class Store {
  constructor() {

    // get data from mongoDB by user@password
  }
  api() {

  }
}
const store = new Store();
console.log("store: ", store);
module.exports = store;