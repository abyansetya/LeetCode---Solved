class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for i in range(len(nums)):
            if(nums[i] in map):
                return True
            map[nums[i]] = i
        return False