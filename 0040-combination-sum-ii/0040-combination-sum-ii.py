class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        arr = []
        candidates.sort()

        def backtrack(i, combi):
            if sum(combi) == target:
                arr.append(combi.copy())
                return
            
            if i >= len(candidates) or sum(combi) > target:
                return
           
            combi.append(candidates[i])
            backtrack(i+1, combi)
            combi.pop()

            while i+1 < len(candidates) and candidates[i] == candidates[i+1]:
                i +=1
        
            backtrack(i + 1, combi)
        backtrack(0, [])
        return arr

