const data = require("./input");
const directory = {
  currentDir: "",
  "/": 0
};

const getWorkingDir = (dir) => {
  if (dir === '/') return dir;
  const test = getCurrentDir();
  if (getCurrentDir().at(-1) === '/') return getCurrentDir().concat(dir)
  return getCurrentDir().concat(`/${dir}`)
}
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
      processFile(output)
      break;
  }
};

const processFile = (file) => {
  let currentDir = getCurrentDir();
  const size = parseInt(file[0]);
  while (currentDir !== '/') {
    if (!directory[currentDir]) {
      directory[currentDir] = 0;
    }
    directory[currentDir] += size
    currentDir = currentDir.slice(0, currentDir.lastIndexOf('/'))
    if (!currentDir) {
      currentDir = '/'
    }
  }
}

const processCommand = (command) => {
  switch (command[1]) {
    case "cd":
      processCD(command[2]);
      break;
  }
};

const processCD = (dir) => {
  let currentDir = getCurrentDir()
  if (dir === "..") {
    currentDir = currentDir.slice(0, currentDir.lastIndexOf('/'));
  } else {
    currentDir = getWorkingDir(dir)
  }
  directory.currentDir = currentDir;
};
data.forEach(element => {
  parseCommand(element) 
});

let total = 0;
Object.keys(directory).forEach(dir => {
  if (directory[dir] < 100000) {
    total += directory[dir]
  }
})

total