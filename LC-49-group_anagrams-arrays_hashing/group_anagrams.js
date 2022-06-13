/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  ans = {};
  for (i = 0; i < strs.length; i++) {
    str = strs[i];
    str_sorted = str.split("").sort().join("");
    if (str_sorted in ans) {
      ans[str_sorted].push(str);
    } else {
      ans[str_sorted] = [str];
    }
  }
  return Object.values(ans);
};
