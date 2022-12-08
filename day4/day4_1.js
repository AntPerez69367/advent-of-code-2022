const input = require("./input.json");

const isContained = (s1, st1, s2, st2) =>
  (s1 <= s2 && st1 >= st2) || (s2 <= s1 && st2 >= st1);

const answer = input.reduce((acc, curr) => {
  const [firstGuy, secondGuy] = curr.split(",");
  const [firstGuyStart, firstGuyEnd] = firstGuy.split("-");
  const [secondGuyStart, secondGuyEnd] = secondGuy.split("-");
  const contained = isContained(
    parseInt(firstGuyStart),
    parseInt(firstGuyEnd),
    parseInt(secondGuyStart),
    parseInt(secondGuyEnd)
  );
  console.log({
    firstGuyStart,
    firstGuyEnd,
    secondGuyStart,
    secondGuyEnd,
    contained,
  });
  if (contained) return acc + 1;
  return acc;
}, 0);

answer;
