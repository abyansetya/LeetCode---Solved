class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        mapp = {}
        res, maxCount = 0,0
        
        for i in nums:
            mapp[i] = 1 + mapp.get(i,0)
            res = i if mapp[i] > maxCount else res
            maxCount = max(maxCount, mapp[i])
        return res
      