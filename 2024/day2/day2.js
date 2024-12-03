import fs from "fs";

const input = fs.readFileSync("./day2.txt", "utf8");

let safeCount = 0;
input.split("\n").forEach((line) => {
  if (line === "") {
    return;
  }
  let [last, ...rest] = line.split(/\s+/);
  let sign = 0;
  let safe = true;
  for (const item of rest) {
    let diff = item - last;

    if (sign !== 0 && Math.sign(diff) !== sign) {
      safe = false;
      break;
    }
    sign = Math.sign(diff);
    diff = Math.abs(diff);
    if (diff > 3 || diff < 1) {
      safe = false;
      break;
    }
    last = item;
  }
  if (safe) safeCount++;
});

console.log(safeCount);
