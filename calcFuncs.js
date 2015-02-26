// Uses cell data to generate a mapped array of necessary heights
// Input: an array rows, each element is an array of heights
//	Returns: one-dimensional array, each is height of a single row
function rowHeights(rows) {  //takes the array "rows" as input
  return rows.map(function(row) {  // maps the array so you get all rows
    return row.reduce(function(max, cell) {  //turns the map into into a single number using reduse
      return Math.max(max, cell.minHeight());  // uses the number as the max height
    }, 0); // i think its like a bottom line for the reduse so it cant get below 0?
          // or a option so it cant come out to be 0 and error the code
  });
}

// Uses cell data to generate a mapped array of necessary widths
// Inputs and outputs are as above, except widths instead of heights
function colWidths(rows) {
  return rows[0].map(function(_, i) { // Note use of "dead" parameter which means ignore the first usual perameter
                                      // and gets one number in each section of the array
    return rows.reduce(function(max, row) { // reuduses the numbers to highest number
      return Math.max(max, row[i].minWidth());  // sets width to that number
    }, 0);
  });
}

