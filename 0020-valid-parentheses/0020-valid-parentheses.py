class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        map = { '}' : '{',
               ')': '(', 
               ']':'['
              }
        for char in s:
            if(char in map):
                if(len(stack) > 0 and stack[len(stack) -1] == map[char]):
                    stack.pop()
                else:
                    return False
            else:
                stack.append(char)
        return len(stack) == 0