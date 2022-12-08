const input = require("./input.json");

const hasOverlap = (s1, st1, s2, st2) =>
  (s1 <= st2 && st1 >= s2) || (s2 <= st1 && st2 >= s1);
const answer = input.reduce((acc, curr) => {
  const [firstGuy, secondGuy] = curr.split(",");
  const [firstGuyStart, firstGuyEnd] = firstGuy.split("-");
  const [secondGuyStart, secondGuyEnd] = secondGuy.split("-");
  const overlapped = hasOverlap(
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
    overlapped,
  });
  if (overlapped) return acc + 1;
  return acc;
}, 0);

answer;
