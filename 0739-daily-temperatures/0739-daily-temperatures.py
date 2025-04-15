class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        answer = [0] * n
        stack = []  # Stack berisi indeks

        for i, temp in enumerate(temperatures):
            # Selama masih ada hari di stack dan suhu sekarang > suhu di atas stack
            while stack and temperatures[i] > temperatures[stack[-1]]:
                prev_day = stack.pop()
                answer[prev_day] = i - prev_day  # Selisih hari
            stack.append(i)

        return answer
