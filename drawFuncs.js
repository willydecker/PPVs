// These functions handle drawing the table
// Many print statements added to implement a logical "looking glass"

// Note that heights and widths are both simple arrays
// 	Each element is the height or width of each successive row 
function drawTable(rows) {
  var heights = rowHeights(rows);
  // print('Heights: ' + heights);
  var widths = colWidths(rows);
  // print('Widths: ' + widths);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  // Draw a single row of the table
  function drawRow(row, rowNum) {
    // blocks is an array of "drawn" cells for a single row
    // colNum is the key puzzle in this call
    // print('Busy drawing row number: ' + rowNum);
    var blocks = row.map(function(cell, colNum) {
    // print('Rendering colNum: ' + colNum);
      // Ask the cells in a given row to draw themselves
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    // 
    return blocks[0].map(function(_, lineNo) {
    // print('Just returned: ' + blocks[0] + ' of line: ' + lineNo + ' as ' + blocks);

    // print('Rendering a line: ' + drawLine(blocks, lineNo));
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  // This is where execution begins
  // After "rendering" each row via the drawRow mapping
  return rows.map(drawRow).join("\n");
}

