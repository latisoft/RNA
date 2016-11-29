// const addon = require('./build/Release/addon.node');

const addon = require('bindings')('addon.node')

console.log('This should be eight:', addon.add(3, 5))