const fs = require("fs");
const text = fs.readFileSync(__dirname + "/input.txt", "utf8");
const elfs = text.split("\n\n");
const mostCalories = Math.max(
  ...elfs.map((elf) => {
    const calories = elf.split("\n");
    return calories.reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0);
  })
);

mostCalories; // 71506
