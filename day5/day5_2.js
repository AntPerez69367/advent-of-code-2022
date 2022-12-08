const test = require("./input.json");

const stacks = [
  ["B", "Z", "T"],
  ["V", "H", "T", "D", "N"],
  ["B", "F", "M", "D"],
  ["T", "J", "G", "W", "V", "Q", "L"],
  ["W", "D", "G", "P", "V", "F", "Q", "M"],
  ["V", "Z", "Q", "G", "H", "F", "S"],
  ["Z", "S", "N", "R", "L", "T", "C", "W"],
  ["Z", "H", "W", "D", "J", "N", "R", "M"],
  ["M", "Q", "L", "F", "D", "S"],
];

test.forEach((move) => {
  const [ammount, from, to] = move
    .replace("move", "")
    .replace("from", ",")
    .replace("to", ",")
    .split(",");

  const moving = [];
  for (let i = 0; i < ammount; i++) {
    moving.push(stacks[from - 1].pop());
  }
  while (moving.length > 0) {
    stacks[to - 1].push(moving.pop());
  }
});

let top = "";
stacks.forEach((stack) => {
  top += stack.at(-1);
});

top;
