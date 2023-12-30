/**
 * @param {string} s
 * @return {boolean}
 */

 //brute force
// var isValid = function(s) {
//     let stack = []

//     for(let i = 0; i < s.length; i++){
//         if(s[i] === '(' || s[i] === '{' || s[i] === '['){
//             stack.push(s[i])
//         }else{
//             if(stack.length === 0 || 
//             (s[i] === ')' && stack[stack.length - 1] !== '(') ||
//             (s[i] === '}' && stack[stack.length- 1] !== '{') ||
//             (s[i] === ']' && stack[stack.length - 1] !== '[')
//             ){
//                 return false;
//             }
//             stack.pop();
//         }
//     }

//     return stack.length == 0
// };

// using hashmap
var isValid = function(s) {
    let stack = [];
    let closeToOpen = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let c of s) {
        if (closeToOpen.hasOwnProperty(c)) {
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
};
