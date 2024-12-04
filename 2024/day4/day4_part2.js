import fs from "fs";

const input = fs.readFileSync("./day4.txt", "utf8");

const lines = input.split("\n").filter((x) => x.trim() !== "");

let sum = 0;
for (let row = 0; row < lines.length; row++) {
  for (let column = 0; column < lines[row].length; column++) {
    if (lines[row][column] !== "A") {
      continue;
    }

    const yes =
      [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
      ].filter(
        ([offsetRow, offsetColumn]) =>
          lines[row + offsetRow]?.[column + offsetColumn] === "M" &&
          lines[row + -offsetRow]?.[column + -offsetColumn] === "S",
      ).length === 2;

    if (yes) sum++;
  }
}
console.log(sum);
