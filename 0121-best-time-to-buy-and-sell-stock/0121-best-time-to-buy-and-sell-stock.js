/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0
    let r = 1
    let maxp = 0
    while(r<= prices.length - 1) {
        if(prices[l] < prices[r]){
            let max = prices[r] - prices[l]
            maxp = Math.max(max, maxp)
        }else{
            l = r
        }
        r += 1
    }
    return maxp
};