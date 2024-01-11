/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let last = digits.length - 1;
    
    if (digits[last] !== 9) {
        digits[last]++;
    } else {
        while (digits[last] === 9 && last > 0) {
            digits[last] = 0;
            last--;
        }
        
        if (digits[last] !== 9) {
            digits[last]++;
        } else {
            digits[last] = 0;
            digits.unshift(1);
        }
    }

    return digits;
};