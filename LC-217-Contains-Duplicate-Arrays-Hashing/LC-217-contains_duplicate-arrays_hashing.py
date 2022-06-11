'''
Given an integer array 'nums', return True if any value 
appears at least twice in the array, and return False if
every element is distinct.
'''

class Solution:
    def containsDuplicate(self, nums) -> bool:
        num_counts = {}
        for num in nums:
            if num not in num_counts:
                num_counts[num] = 1
            else:
                return True
        
        return False











