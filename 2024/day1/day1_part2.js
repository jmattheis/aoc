import fs from "fs";

const input = fs.readFileSync("./day1.txt", "utf8");

const left = [];
const right = {};
input.split("\n").forEach((line) => {
  if (line === "") {
    return;
  }
  const [a, b] = line.split(/\s+/);
  left.push(+a);
  right[b] = (right[b] ?? 0) + 1;
});

const distance = left.reduce(
  (acc, curr, index) => acc + Math.abs(curr * (right[curr] ?? 0)),
  0,
);
console.log(distance);
