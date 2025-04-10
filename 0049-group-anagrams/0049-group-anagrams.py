class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}

        for word in strs:
            key = ''.join(sorted(word))

            if key in map:
                map[key].append(word)
            else:
                map[key] = [word]
        
        return list(map.values())