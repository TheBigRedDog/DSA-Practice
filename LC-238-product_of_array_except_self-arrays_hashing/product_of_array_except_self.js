/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

/*
@param {number[]} nums
@return {number[]}
*/

var productExceptSelf = function (nums) {
  let n = nums.length;
  let ans = new Array(n).fill(1);
  let left_prod = new Array(n).fill(1);
  let right_prod = new Array(n).fill(1);

  for (i = 0; i < n - 1; i++) {
    left_prod[i + 1] = nums[i] * left_prod[i];
  }

  for (i = n - 1; i > 0; i--) {
    right_prod[i - 1] = nums[i] * right_prod[i];
  }

  for (i = 0; i < n; i++) {
    ans[i] = left_prod[i] * right_prod[i];
  }

  return ans;
};
