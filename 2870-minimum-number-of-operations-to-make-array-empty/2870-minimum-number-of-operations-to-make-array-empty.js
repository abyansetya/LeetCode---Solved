/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
    const count = new Map();

    nums.forEach((num) => {
        count.set(num, (count.get(num) || 0) + 1);
    });

    let res = 0;

    for (const total of count.values()) {
        if (total < 2) {
            return -1;
        }

        res += Math.floor(total / 3);

        if (total % 3 !== 0) {
            res += 1;
        }
    }

    return res;
}