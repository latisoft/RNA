
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
    this.subtrays = [ 
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
    ];

    this.intensityData = 
    "Date, Time, Temperature\n" + 
    "2015-05-30,20,7.0\n" +
    "2015-05-30,21,6.1\n" + 
    "2015-05-30,22,5.6\n" +
    "2015-05-30,23,4.5";

    this.pieData =[ {name: "Firefox", y: 6},
                    {name: "MSIE",    y: 4},
                    {name: "Safari",  y: 4},
                    {name: "Opera",   y: 1},
                    {name: "Chrome",  y: 7} ];

    this.plotData0 = {
      AA: [ [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0],
            [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8],
            [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2],
            [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [147.2, 49.8] ],
      AB: [ [150.0, 98.3], [149.7,106.2], [144.3, 79.9], [151.4, 112.6] ],
      BB: [ [177.8, 96.8], [167.6, 69.1], [167.6, 82.7], [180.3, 75.5],
            [182.9, 79.5], [176.5, 73.6], [186.7, 91.8], [188.0, 84.1],
            [189.0, 85.9], [175.2, 81.8], [174.0, 82.5], [176.8, 80.5],
            [171.4, 70.0], [185.4, 81.8], [185.4, 84.1] ]
    };
    this.plotData1 = {
      AA: [ [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0],
            [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8],
            [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2],
            [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [147.2, 49.8] ],
      AB: [ [177.8, 96.8], [167.6, 69.1], [167.6, 82.7], [180.3, 75.5],
            [182.9, 79.5], [176.5, 73.6], [186.7, 91.8], [188.0, 84.1],
            [189.0, 85.9], [175.2, 81.8], [174.0, 82.5], [176.8, 80.5],
            [171.4, 70.0], [185.4, 81.8], [185.4, 84.1] ],
      BB: [ [150.0, 98.3], [149.7,106.2], [144.3, 79.9], [151.4, 112.6] ]
    };

  }
  componentDidMount() {
    /*
    let k = 0;
    for(let i=0; i<6; i++)
    {
      for(let j=0; j<64; j++)
      {
        this.subtrays[i][j] = 1000*i + j; 
      }
    }
    */
    console.log("========== this.subtrays: ", this.subtrays);
  }

  api() {

  }
}
const store = new Store();
module.exports = store;

console.log("store: ", store);