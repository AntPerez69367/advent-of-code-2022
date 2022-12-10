const fs = require("fs");
const text = fs.readFileSync(__dirname + "/input.txt", "utf8");
const forest = text.split("\n").map((row) => row.split(""));
let mostBeautifulLocation = Math.max(
  ...forest.map((row, index) => {
    return Math.max(
      ...row.map((tree, treeIndex) => {
        let rightBeauty = 0;
        for (let i = treeIndex + 1; i < row.length; i++) {
          rightBeauty++;
          if (row[i] >= tree) break;
        }
        let leftBeauty = 0;
        for (let i = treeIndex - 1; i >= 0; i--) {
          leftBeauty++;
          if (row[i] >= tree) break;
        }
        let upBeauty = 0;
        for (let i = index - 1; i >= 0; i--) {
          upBeauty++;
          if (forest[i][treeIndex] >= tree) break;
        }
        let downBeauty = 0;
        for (let i = index + 1; i < forest.length; i++) {
          downBeauty++;
          if (forest[i][treeIndex] >= tree) break;
        }
        return rightBeauty * leftBeauty * upBeauty * downBeauty;
      })
    );
  })
);

mostBeautifulLocation; //315495
