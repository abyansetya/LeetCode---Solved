/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// my version:

// var mergeTwoLists = function(list1, list2) {
//     let dummy = new ListNode(-1); // Dummy node to simplify handling the head of the merged list
//     let current = dummy;

//     while (list1 !== null || list2 !== null) {
//         if (list1 === null) {
//             current.next = list2;
//             break;
//         }

//         if (list2 === null) {
//             current.next = list1;
//             break;
//         }
//         if (list1.val < list2.val) {
//             current.next = new ListNode(list1.val);
//             current = current.next;
//             list1 = list1.next;
//         } else {
//             current.next = new ListNode(list2.val);
//             current = current.next;
//             list2 = list2.next;
//         }
//     }

//     return dummy.next; // The merged list starts from the next node of the dummy node
// };

//different code same algor:
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode()
    let tail = dummy

    while(list1 && list2){
        if(list1.val < list2.val){
            tail.next = new ListNode(list1.val)
            list1 = list1.next
        }else{
            tail.next = new ListNode(list2.val)
            list2 = list2.next
        }
        tail = tail.next
    }

    if(list1){
        tail.next = list1
    }
    else if(list2){
        tail.next = list2
    }
    return dummy.next
}