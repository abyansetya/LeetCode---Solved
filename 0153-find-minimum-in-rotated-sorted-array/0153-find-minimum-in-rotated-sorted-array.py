class Solution:
    def findMin(self, nums: List[int]) -> int:
        minim = 0
        l,r = 0, len(nums) -1
        while l <= r:
            minim = min(nums[l], nums[r])
            if nums[l] < nums[r]:
                r -= 1
            elif nums[l] > nums[r]:
                l +=1
            else:
                r-=1
        return minim