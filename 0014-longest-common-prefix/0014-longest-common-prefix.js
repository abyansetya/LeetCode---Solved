/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function(strs) {
    const result = [];

    // sort 
    const sortedStrs = strs.sort();

    // menentukan elemen pertama dan terakhir
    const first = sortedStrs[0].split('');
    const last = sortedStrs[sortedStrs.length - 1].split('');

  
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== last[i]) {
            break;
        }
        result.push(first[i]);
    }
    return result.join('');
};