const data = require("./input");

const directory = {
  currentDir: [],
};

const getWorkingDir = (dir) => {
  if (dir === "/") return dir;
  if (getCurrentDir().at(-1) === "/") return getCurrentDir().concat(dir);
  return [...getCurrentDir().concat(`/${dir}`)];
};

const getCurrentDir = () => directory.currentDir;

const parseCommand = (input) => {
  const output = input.split(" ");
  switch (output[0]) {
    case "$":
      processCommand(output);
      break;
    case "dir":
      break;
    default:
      processFile(output);
      break;
  }
};

const processFile = (file) => {
  let currentDir = [...getCurrentDir()];
  const size = parseInt(file[0]);
  while (currentDir.length > 0) {
    const path = currentDir.join("/");
    if (!directory[path]) {
      directory[path] = 0;
    }
    directory[path] += size;
    currentDir.pop();
  }
};

const processCommand = (command) => {
  switch (command[1]) {
    case "cd":
      processCD(command[2]);
      return;
    default:
      return;
  }
};

const processCD = (dir) => {
  if (dir === "..") {
    directory.currentDir.pop();
  } else {
    directory.currentDir.push(dir);
  }
};

data.forEach((element) => {
  parseCommand(element);
});

const spaceUsed = directory["/"];
const spaceNeeded = 30000000 - (70000000 - spaceUsed);

let possibleDeletes = [];
Object.keys(directory).forEach((dir) => {
  if (dir === "currentDir") return;
  if (directory[dir] > spaceNeeded) possibleDeletes.push(directory[dir]);
});

console.log({
  spaceNeeded,
  min: Math.min(...possibleDeletes),
});
