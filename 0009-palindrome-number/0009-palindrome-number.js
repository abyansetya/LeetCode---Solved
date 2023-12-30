/**
 * @param {number} x
 * @return {boolean}
 */

// First Algorithm
// var isPalindrome = function(x) {
//     let temp = x
//     let p = 0
//     while(temp > 0){
//         let bil_akhir = temp % 10
//         p = p * 10 + bil_akhir
//         temp = Math.floor(temp / 10)
//     }

//     return x === p
// };

// second algorithm
function isPalindrome(x){
    if(x < 0 ) {
        return false;
    }
    let div = 1
    while(x >= 10 * div){
        div = div * 10;
    }

    while(x){
        right = x % 10;
        left = Math.floor(x / div)

        if(left != right){
            return false;
        }

        temp = x % div;
        x = Math.floor(temp / 10);
        div = Math.floor(div / 100);
    }
    return true;
}