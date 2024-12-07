import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");

const lines = input.split("\n").filter((x) => x.trim() !== "");

const ops = {
  "*": (a, b) => a * b,
  "+": (a, b) => a + b,
  "||": (a, b) => +("" + a + b),
};

function permutations(arr, n) {
  if (n == 1) {
    return arr.map((item) => [item]);
  }
  return permutations(arr, n - 1).flatMap((next) =>
    arr.map((item) => [...next, item]),
  );
}

function check(test, values) {
  const actionsPermutations = permutations(Object.keys(ops), values.length - 1);

  for (let actions of actionsPermutations) {
    let result = values[0];
    for (let i = 1; i < values.length; i++) {
      // console.log(result, actions[i-1], values[i], '=', ops[actions[i - 1]](result, values[i]))
      result = ops[actions[i - 1]](result, values[i]);
    }

    if (result === test) {
      console.log("OK   ", test, values, actions);
      return true;
    } else {
      // console.log("FAIL ", test, values);
    }
  }
  console.log("FAIL ", test, values);
  return false;
}

let sum = 0;

for (let line of lines) {
  let [test, rest] = line.split(": ");
  test = +test;
  const values = rest.split(" ").map((x) => parseInt(x));

  if (check(test, values)) {
    sum += +test;
    continue;
  }
}

console.log(sum);
