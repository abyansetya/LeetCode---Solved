import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean = re.sub(r'[^a-zA-Z0-9]', '', s.lower())
        return clean == clean[::-1]
