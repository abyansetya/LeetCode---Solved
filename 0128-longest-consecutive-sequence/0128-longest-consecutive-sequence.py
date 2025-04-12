class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        longest = 0

        for num in num_set:
            if num-1 not in num_set:
                current = num
                streak = 1
            
                while current + 1 in num_set:
                    current +=1
                    streak += 1
            
                longest = max(streak, longest)
        
        return longest