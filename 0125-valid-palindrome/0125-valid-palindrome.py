import re

class Solution: 
    
    
    def isPalindrome(self, s: str) -> bool:
        # with build in function
        # memory is not O(1)
        clean = re.sub(r'[^a-zA-Z0-9]', '', s.lower())
        return clean == clean[::-1]
        
        #Memory O(1)
#         l,r = 0, len(s)-1
        
#         while l < r:
#             while l < r and not self.alphanum(s[l]):
#                 l += 1
#             while r > l and not self.alphanum(s[r]):
#                 r -=1
#             if s[l].lower() != s[r].lower():
#                 return False
#         return True