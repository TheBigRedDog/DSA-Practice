/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let n = 9;
  let rows = [];
  let cols = [];
  let boxs = [];

  for (i = 0; i < n; i++) {
    let rowi = new Set();
    let coli = new Set();
    let boxi = new Set();
    rows.push(rowi);
    cols.push(coli);
    boxs.push(boxi);
  }

  for (row_i = 0; row_i < n; row_i++) {
    for (col_i = 0; col_i < n; col_i++) {
      let val = board[row_i][col_i];
      if (val == ".") {
        continue;
      }
      let box_i = Math.floor(row_i / 3) * 3 + Math.floor(col_i / 3);
      switch (true) {
        case rows[row_i].has(val):
          return false;

        case cols[col_i].has(val):
          return false;

        case boxs[box_i].has(val):
          return false;

        default:
          rows[row_i].add(val);
          cols[col_i].add(val);
          boxs[box_i].add(val);
      }
    }
  }
  return true;
};
