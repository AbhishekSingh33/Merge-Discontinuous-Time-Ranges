/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  // Edge case: if no ranges provided, return empty array
  if (!ranges || ranges.length === 0) return [];

  // Step 1: Sort the ranges by start time
  const sortedRanges = [...ranges].sort((a, b) => a[0] - b[0]);

  // Step 2: Initialize merged array with the first range
  const merged = [];
  let [currentStart, currentEnd] = sortedRanges[0];

  // Step 3: Iterate through the rest of the ranges
  for (let i = 1; i < sortedRanges.length; i++) {
    const [nextStart, nextEnd] = sortedRanges[i];

    // If next range starts before or within threshold gap of current range
    if (nextStart <= currentEnd + threshold) {
      // Merge by extending the current end if needed
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      // Push current range to merged list
      merged.push([currentStart, currentEnd]);
      // Start new range
      currentStart = nextStart;
      currentEnd = nextEnd;
    }
  }

  // Step 4: Push the last merged range
  merged.push([currentStart, currentEnd]);

  return merged;
};

module.exports = {
  mergeTimeRanges
};
