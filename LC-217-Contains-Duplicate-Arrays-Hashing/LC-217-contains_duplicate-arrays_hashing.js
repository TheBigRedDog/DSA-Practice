/*
Given an integer array 'nums', return True if any value 
appears at least twice in the array, and return False if
every element is distinct.
*/

var containsDuplicate = function (nums) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
    num = nums[i];
    if (counts.hasOwnProperty(num)) {
      return true;
    } else {
      counts[num] = 1;
    }
  }
  return false;
};
