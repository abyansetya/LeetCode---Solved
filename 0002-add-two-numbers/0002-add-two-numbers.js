/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode();
    let curr = l3;
    let carry = 0;

    while(l1 || l2 || carry){
        let val1 = l1 ? l1.val : 0 ;
        let val2 = l2 ? l2.val : 0 ;

        // new digit
        let val = val1 + val2 + carry
        carry = Math.floor(val / 10)
        val = val % 10
        curr.next = new ListNode(val)

        //update pointers
        curr = curr.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }

    return l3.next
};