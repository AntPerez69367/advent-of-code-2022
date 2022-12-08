const data = require("./input");
const directory = {
  currentDir: ["/"],
  "/": {},
};
const parseCommand = (input) => {
  const output = input.split(" ");
  switch (output[0]) {
    case "$":
      break;
    case "dir":
      break;
    default:
      break;
  }
};

const processCommand = (command) => {
  switch (command[1]) {
    case "cd":
      processCD(command[2]);
      break;
    case "ls":
      processLS();
      break;
    default:
      break;
  }
};

const processCD = (dir) => {
  if (dir === "..") {
    directory.currentDir.pop();
  } else {
    directory.currentDir.push(dir);
  }
};
const processLS = () => {};
const test = data[0].split(" ");
test;
