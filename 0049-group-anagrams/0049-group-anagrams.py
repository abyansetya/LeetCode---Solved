class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = defaultdict(list)
        
        for i in strs:
            count = [0] * 26 #a...z
            for j in i:
                count[ord(j) - ord("a")] += 1
            map[tuple(count)].append(i)
        return map.values()