import fs from "fs";

const x = fs.readFileSync("./day3.txt", "utf8");

let sum = 0;

x.split("\n")
  .join("")
  .split("do()")
  .forEach((enabled) => {
    if (enabled.trim() === "") {
      return;
    }

    const [x] = enabled.split("don't()");

    const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;

    [...x.matchAll(pattern)].forEach(([, left, right]) => {
      sum += left * right;
    });
  });
console.log(sum);
