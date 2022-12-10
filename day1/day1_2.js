const fs = require("fs");
const text = fs.readFileSync(__dirname + "/input.txt", "utf8");
const elfs = text.split("\n\n");
const caloricTotals = elfs.map((elf) => {
  const calories = elf.split("\n");
  return calories.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
});

const topThreeElfs = caloricTotals.sort((a, b) => b - a).slice(0, 3);
const topThreeSum = topThreeElfs.reduce((acc, curr) => {
  return acc + curr;
}, 0);
topThreeSum; //209603
