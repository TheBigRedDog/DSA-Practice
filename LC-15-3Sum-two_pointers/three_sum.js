/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  let triplets = [];
  if (nums.length < 2) {
    return triplets;
  }
  nums.sort();

  for (i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i == 0 || nums[i - 1] != nums[i]) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        let diff = nums[i] + nums[j] + nums[k];

        switch (true) {
          case diff == 0:
            let triplet = [nums[i], nums[j], nums[k]];
            triplets.push(triplet);
            break;
          case diff > 0:
            k = k--;
            break;
          case diff < 0:
            j = j++;
            break;
        }
      }
    }
  }

  return triplets;
};
