/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let l = 0
    let maxl = 0

    for(let r = 0; r <= s.length - 1; r++){
        while(set.has(s[r])){
            set.delete(s[l])
            l++
        }
        set.add(s[r])
        maxl = Math.max(maxl, r-l+1)
    }
    return maxl
};