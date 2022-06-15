'''
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
'''

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:

        count = {}
        l = 0
        ans = 0
        max_frequency = 0
        for r, char in enumerate(s):
            
            if r == len(s):
                return ans
            
            count[char] = count.get(char, 0) + 1
            max_frequency = max(max_frequency, count[char])
            if (r - l + 1) - max_frequency <= k:
                ans = max(ans, r - l + 1)
            else:
                count[s[l]] -= 1
                l += 1
        
        return ans
            
 