'''
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
'''

from typing import List


class Solution:
    def threeSum(self, nums: list) -> list]:
        if len(nums) < 2:
            return []
        
        nums.sort()
        triplets = set()
        
        for i in range(len(nums)):
            if nums[i] > 0:
                break
            if i == 0 or nums[i-1] != nums[i]:
                j = i + 1
                k = len(nums)-1

                while j < k:
                    diff = nums[i] + nums[j] + nums[k]

                    if diff == 0:
                        if not (nums[i], nums[j], nums[k]) in triplets:
                            triplets.add((nums[i], nums[j], nums[k]))
                    elif diff > 0:
                        k -= 1
                    else:
                        j += 1
        
            
        ans = []
        for triplet in triplets:
            ans.append([triplet[0], triplet[1], triplet[2]])
        return ans