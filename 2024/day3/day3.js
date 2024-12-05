import fs from "fs";

const x = fs.readFileSync("./day3_small.txt", "utf8");

x.split("\n").forEach((line) => {
  if (line.trim() === "") {
    return;
  }

  const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;

  [...x.matchAll(pattern)].forEach(([, left, right]) => {
    sum += left * right;
  });
});
