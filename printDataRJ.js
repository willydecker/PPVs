load('calcFuncs.js');
load('drawFuncs.js');
load('TextCell.js');
load('UnderlinedCell.js');
load('RTextCell.js');

// Here's where you load the dataset
// load('mountains.js');
// load('houses.js');
load('larder.js');

// As suggested by stackoverflow post
// Original regex for safekeeping
// var dateReg = /^\d{2}[.-/]\d{2}[.-/]\d{4}$/

// Set whether or not to right-justify dates
var rightJustifyDates = false;
var dateReg = (rightJustifyDates?/^(\d{2}|\d)[.-/](\d|\d{2})[.-/]\d{2}$/:null);

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      var value = row[name];
      // This was changed:
      // Here is where new date type test will go
//if(typeof value == "string")
//print('Matching: ' + value + ' with ' + value.match(dateReg));
      if ((typeof value == "number"))
        return new RTextCell(String(value));
      else
        if(typeof value == "string" && value.match(dateReg))
	  return new RTextCell(String(value));
	else
          return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
}

print(drawTable(dataTable(LARDER_FILE)));
