const fs = require("fs");
const text = fs.readFileSync(__dirname + "/input.txt", "utf8");
const forest = text.split("\n").map((row) => row.split(""));
let visibleCount = forest.reduce((acc, row, index) => {
  return (
    acc +
    row.reduce((acc, tree, treeIndex) => {
      let rightVisible = true;
      for (let i = treeIndex + 1; i < row.length; i++) {
        if (row[i] >= tree) rightVisible = false;
      }
      let leftVisible = true;
      for (let i = treeIndex - 1; i >= 0; i--) {
        if (row[i] >= tree) leftVisible = false;
      }
      let upVisible = true;
      for (let i = index - 1; i >= 0; i--) {
        if (forest[i][treeIndex] >= tree) upVisible = false;
      }
      let downVisible = true;
      for (let i = index + 1; i < forest.length; i++) {
        if (forest[i][treeIndex] >= tree) downVisible = false;
      }
      return acc + (rightVisible || leftVisible || upVisible || downVisible);
    }, 0)
  );
}, 0);

visibleCount; //1812
