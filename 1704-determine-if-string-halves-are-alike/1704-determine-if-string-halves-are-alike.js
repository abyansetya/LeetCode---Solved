/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = 'aiueoAIUEO';

    let l = 0;
    let r = s.length - 1;
    let res = 0;

    while (l < r) {
        if (vowels.includes(s[l])) {
            res++;
        }
        if (vowels.includes(s[r])) {
            res--;
        }
        l++;
        r--;
    }

    return res === 0;
};
