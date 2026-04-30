/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0
    let r = height.length - 1
    let vol = 0
    while(l < r){
        let minim = Math.min(height[l] , height[r])
        let selisih = r - l
        let res = minim * selisih

        vol = Math.max(vol, res)
        if(height[l] < height[r]){
            l++
        }else if(height[l] > height[r]){
            r--
        }
        else{
            l++
        }
    }

    return vol
};