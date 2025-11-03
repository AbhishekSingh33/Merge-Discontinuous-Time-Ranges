const timeRangeModule = require('./index');

// Example 1
const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
console.log(timeRangeModule.mergeTimeRanges(ranges1, 200));
// Expected: [ [1000, 2000], [2500, 4100], [8000, 9500] ]

// Example 2
const ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
console.log(timeRangeModule.mergeTimeRanges(ranges2, 4));
// Expected: [ [0, 10], [15, 20], [25, 30] ]

// Example 3
const ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
console.log(timeRangeModule.mergeTimeRanges(ranges3, 3));
// Expected: [ [0, 35] ]
