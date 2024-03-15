class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n <= 0 or not isinstance(n, int):
            return False
        if n == 1:
            return True
        if n % 2 == 0:
            return self.isPowerOfTwo(n//2)
        return False