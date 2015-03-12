var LARDER_FILE = [
{ "labelID": "24", "name": "WW flour", "quantity": 11, "units": "lb", "dateIn": "2/1/15", "life": 45  },
{ "labelID": "25", "name": "Avocado", "quantity": 3, "units": "ea", "dateIn": "2/1/15", "life": 10  },
{ "labelID": "26", "name": "milk", "quantity": 1, "units": "half-gal", "dateIn": "2/6/15", "life": 8  },
{ "labelID": "27", "name": "butter", "quantity": 2, "units": "lb", "dateIn": "2/1/15", "life": 20  },
{ "labelID": "28", "name": "salt", "quantity": 1, "units": "lb", "dateIn": "1/20/15", "life": 365  },
{ "labelID": "29", "name": "Cream cheese", "quantity": 3, "units": "lb", "dateIn": "1-10-15", "life": 45 },
{ "labelID": "30", "name": "Bread flour", "quantity": 10, "units": "lb", "dateIn": "2/7/15", "life": 45  },
{ "labelID": "31", "name": "Chicken Stock", "quantity": 1, "units": "gal", "dateIn": "1/22/15", "life": 10  },
{ "labelID": "32", "name": "Mexican rice", "quantity": 1, "units": "gl", "remark": "UNSALTED!!", "dateIn": "1/28/15", "life": 20  }
];

// This makes sure the data is exported in node.js
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = LARDER_FILE ;
