/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0

    const hitungTinggi = (node) => {
        if (node === null) return 0

        let kiri = hitungTinggi(node.left)
        let kanan = hitungTinggi(node.right)

        maxDiameter = Math.max(maxDiameter, kiri + kanan)

        return Math.max(kiri, kanan) + 1
    }

    hitungTinggi(root)
    return maxDiameter
};