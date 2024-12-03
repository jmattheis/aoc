import fs from "fs";

const input = fs.readFileSync("./day1.txt", "utf8");

const left = [];
const right = [];
input.split("\n").forEach((line) => {
    if (line === '') {
        return
    }
  const [a, b] = line.split(/\s+/);
  left.push(+a);
  right.push(+b);
});

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

const distance = left.reduce((acc, curr, index) => acc + Math.abs(curr - right[index]), 0)
console.log(distance)
