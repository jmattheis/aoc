import fs from "fs";

const input = fs.readFileSync("./day4.txt", "utf8");

const lines = input.split("\n").filter((x) => x.trim() !== "");

function check(sourceRow, sourceColumn, offsetRow, offsetColumn) {
  let find = "XMAS";
  let row = 0;
  let column = 0;
  for (let i = 0; i < find.length; i++) {
    if (find[i] !== lines[sourceRow + row]?.[sourceColumn + column]) {
      return 0;
    }

    column += offsetColumn;
    row += offsetRow;
  }
  return 1;
}

let sum = 0;
for (let row = 0; row < lines.length; row++) {
  for (let column = 0; column < lines[row].length; column++) {
    for (let i = -1; i <= 1; i++) {
      for (let y = -1; y <= 1; y++) {
        if (y === 0 && i === 0) {
          continue;
        }
        sum += check(row, column, i, y);
      }
    }
  }
}
console.log(sum);
