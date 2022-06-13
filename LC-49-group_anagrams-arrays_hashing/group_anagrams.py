from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: list) -> list:
        ans = defaultdict(list)
        for s in strs:
            s_sorted = tuple(sorted(s))
            ans[s_sorted].append(s)
        return ans.values()