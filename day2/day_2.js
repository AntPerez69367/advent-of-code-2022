const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf8");
const test = text.split("\n");

const PAPER = 2;
const ROCK = 1;
const SCISSORS = 3;
const LOSS = 0;
const DRAW = 3;
const WIN = 6;

const RESULTS = {
  LOSE: {
    A: SCISSORS,
    B: ROCK,
    C: PAPER,
  },
  DRAW: {
    A: ROCK,
    B: PAPER,
    C: SCISSORS,
  },
  WIN: {
    A: PAPER,
    B: SCISSORS,
    C: ROCK,
  },
};

const INITIAL_STATE = { X: 0, Y: 0, Z: 0 };
const result = test.reduce((acc, curr) => {
  const entry = curr.split(" ");
  if (!acc.has(entry[0])) {
    return acc.set(entry[0], { ...INITIAL_STATE, [entry[1]]: 1 });
  }
  const data = acc.get(entry[0]);
  return acc.set(entry[0], { ...data, [entry[1]]: data[entry[1]] + 1 });
}, new Map());

let total = 0;

result;

for (let [key, value] of result) {
  key;
  value;

  Object.keys(value).forEach((subKey) => {
    subKey;
    switch (subKey) {
      case "X":
        total += (RESULTS["LOSE"][key] + LOSS) * value[subKey];
        break;
      case "Y":
        total += (RESULTS["DRAW"][key] + DRAW) * value[subKey];
        break;
      case "Z":
        total += (RESULTS["WIN"][key] + WIN) * value[subKey];
        break;
    }
  });
}

total;
