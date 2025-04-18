class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            mid = (l + r) //2

            if num[mid] == target:
                return mid
            elif num[mid] < target:
                l = mid+1
            else:
                r = mid -1
        
        return -1