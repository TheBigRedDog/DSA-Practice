'''
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
'''
'''
Solution explanation:
When sorted array is shifted => after taking the middle, one side will always be sorted
1. take middle and compare with target. If match, return middle
2. If middle > left side, left side is sorted
2a. Check if target in left side with left <= target < middle. If target in there, recurse on that side.
2b. Target not in left side, recurse on right side
3. If middle < right side, right side is sorted
3a. Check if target in right side with middle < target <= right. If target in there, recurse on that side.
3b. Target not in right side, recuse on left side
'''

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        
        l, r = 0, len(nums)-1
        
        while l <= r:
            m = l + (r-l)//2
            
            if nums[m] == target:
                return m
            
            elif nums[m] >= nums[0]:
                if nums[0] <= target < nums[m]:
                    r = m - 1
                else:
                    l = m + 1
            elif nums[m] <= nums[-1]:
                if nums[m] < target <= nums[-1]:
                    l = m + 1
                else:
                    r = m - 1
        return -1
                    