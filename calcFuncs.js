// Uses cell data to generate a mapped array of necessary heights
// Input: an array rows, each element is an array of heights
//	Returns: one-dimensional array, each is height of a single row
function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

// Uses cell data to generate a mapped array of necessary widths
// Inputs and outputs are as above, except widths instead of heights
function colWidths(rows) {
  return rows[0].map(function(_, i) { // Note use of "dead" parameter
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

