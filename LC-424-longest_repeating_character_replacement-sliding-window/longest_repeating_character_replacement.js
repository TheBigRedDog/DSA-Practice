/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
*/
/*
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function (s, k) {
  let count = {};
  let l = 0;
  let max_freq = 0;
  let ans = 0;

  for (r = 0; r < s.length; r++) {
    let char = s[r];

    if (char in count) {
      count[char] = ++count[char];
    } else {
      count[char] = 1;
    }

    max_freq = Math.max(max_freq, count[char]);

    if (r - l + 1 - max_freq <= k) {
      ans = Math.max(ans, r - l + 1);
    } else {
      count[s[l]] = --count[s[l]];
      l = ++l;
    }
  }
  return ans;
};
