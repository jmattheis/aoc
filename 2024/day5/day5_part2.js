import fs from "fs";

const input = fs.readFileSync("./day5.txt", "utf8");

const [constraintsString, orderString] = input
  .split("\n\n")
  .map((x) => x.trim());

const constraints = {};
constraintsString.split("\n").forEach((line) => {
  const [a, b] = line.split("|");
  (constraints[a] ??= {})[b] = true;
});

const orders = orderString.split("\n");

let sum = 0;

orders.forEach((line) => {
  const pages = line.split(",");

  let err = false;

  let changed = true;
  aoeu: while (changed) {
    changed = false;
    for (let i = 0; i < pages.length; i++) {
      const curr = pages[i];
      for (let y = i + 1; y < pages.length; y++) {
        const check = pages[y];

        if (constraints[check]?.[curr] === true) {
          pages[i] = check;
          pages[y] = curr;
          changed = true;
          err = true;
          continue aoeu;
        }
      }
    }
  }

  if (err) sum += +pages[(pages.length - 1) / 2];
});
console.log(sum);
