/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const sym = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    let res = 0;

    for(i = 0; i < s.length; i++){
        const curr = sym[s[i]];
        const next = sym[s[i + 1]]

        if(curr < next){
            res += next - curr
            i++
        }
        else{
            res += curr
        }
    }
    return res;
};