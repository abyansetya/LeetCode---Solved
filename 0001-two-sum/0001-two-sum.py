class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mapp  = {}
        for i in range(len(nums)):
            selisih = target - nums[i]
            if selisih in mapp:
                return [mapp[selisih], i]
            mapp[nums[i]] = i
        return []

        