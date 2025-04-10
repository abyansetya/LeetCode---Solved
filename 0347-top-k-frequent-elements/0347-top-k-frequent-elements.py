class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # map = {}

        # for num in nums:
        #     if num in map:
        #         map[num] += 1
        #     else:
        #         map[num] = 1
        
        # sorted_map = sorted(map.items(), key=lambda x:x[1], reverse=True)

        # result = []
        # for i in range(k):
        #     result.append(sorted_map[i][0])

        # return result
        map = {}
        bucket = [[] for _ in range(len(nums) + 1)]

        for num in nums:
            map[num] = 1 + map.get(num, 0)
        
        for num, freq in map.items():
            bucket[freq].append(num)

        res = []
        for i in range(len(bucket)-1, 0, -1):
            for num in bucket[i]:
                res.append(num)
                if len(res) == k:
                    return res