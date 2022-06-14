'''
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
'''

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        product_left, product_right, ans = [1]*n, [1]*n, [1]*n
        
        for i in range(n-1):
            product_left[i+1] = product_left[i] * nums[i]
        
        for i in range(n-1, 0, -1): 
            product_right[i-1] = product_right[i] * nums[i]
            
        for i in range(n):
            ans[i] = product_right[i] * product_left[i]
            
            
        return ans
            