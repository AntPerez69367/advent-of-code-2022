const input = require("./input.json");
const LOWER_CASE_OFFSET = 96;
const UPPER_CASE_OFFSET = 64;
const UPPER_CASE_PRIORITY = 26;

const getCharacterMap = () => {
  const map = new Map();
  for (let i = 0; i <= 26; i++) {
    map.set(String.fromCharCode(i + LOWER_CASE_OFFSET), i);
    map.set(
      String.fromCharCode(i + UPPER_CASE_OFFSET),
      i + UPPER_CASE_PRIORITY
    );
  }
  return map;
};

const map = getCharacterMap();
const priorityMap = new Map();

const getGroups = () => {
  const groups = [];
  for (let i = 0; i <= input.length - 3; i += 3) {
    groups.push([input[i], input[i + 1], input[i + 2]]);
  }
  return groups;
};

const groups = getGroups();

groups.forEach((group) => {
  group[0].split("").forEach((letter) => {
    if (group[1].includes(letter) && group[2].includes(letter))
      priorityMap.set(group[0], letter);
  });
});

let total = 0;
priorityMap.forEach((value, key) => {
  total += map.get(value);
});
total;
