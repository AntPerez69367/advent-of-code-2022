import input from "./input.json";
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

input.forEach((bundle) => {
  const test1 = bundle.substring(0, bundle.length / 2);
  const test2 = bundle.substring(bundle.length / 2, bundle.length);
  const currMap = new Map();
  for (let i = 0; i < test1.length; i++) {
    if (!currMap.has(test1[i])) {
      currMap.set(test1[i], 1);
    } else {
      currMap.set(test1[i], currMap.get(test1[i]) + 1);
    }
  }

  test2.split("").forEach((value) => {
    if (currMap.has(value)) priorityMap.set(bundle, value);
  });
});

let total = 0;
priorityMap.forEach((value, key) => {
  total += map.get(value);
});

total;
