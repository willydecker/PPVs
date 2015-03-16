load('calcFuncs.js');
load('drawFuncs.js');
load('TextCell.js');
load('UnderlinedCell.js');
load('RTextCell.js');

// Here's where you load the dataset
// load('mountains.js');
// load('houses.js');
// load('larder.js');
load('PP.js');

// This code does date recognition so they can be right-justified
//   You can turn it on and off with this variable
var rightJustifyDates = true;
// This regular expression contains logic-by-pattern to identify a date
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
