/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let set = new Set()
//     let l = 0
//     let max = 0

//     if(s === 0) return 0
//     if(s === 1) return 1

//     for(let i = 0; i < s.length; i++){
//         while(set.has(s[i])){
//             set.delete(s[l])
//             l++
//         }

//         set.add(s[i])
//         max = Math.max(max, i-l+1)
//     }
//     return max
// };

var lengthOfLongestSubstring = function(s){
    let set = new Set()
    let l = 0
    let max = 0

    if(s.length === 0) return 0
    if(s.length === 1) return 1

    for(let i = 0; i < s.length; i++){
        while(set.has(s[i])){
            set.delete(s[l])
            l++
        }
        set.add(s[i])
        max = Math.max(max, i - l + 1)
    }
    return max
}