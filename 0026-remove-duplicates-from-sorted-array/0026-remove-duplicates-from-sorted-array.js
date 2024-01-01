/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 1
    let none = 0
    if(nums.length === 0){
        return none
    }else{
        for(let r = 1; r < nums.length; r++){
            if(nums[r] !== nums[r-1]){
                nums[left] = nums[r]
                left++
            }
        }
    }
    return left
};