/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while(l <= r){
        m = Math.floor((l + r) / 2)

        if(target === nums[m]){
            return m
        }

        if(nums[m] > target){
            r = m - 1
        }
        else {
            l = m + 1
        }
    }
    return l
};