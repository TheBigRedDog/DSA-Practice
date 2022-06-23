/*
Problem Statement:
Given the head of a linked list, remove the nth node from the end of the list and return its head.
/*
/*
Solution explanation:
By using two pointers we can craft a one-pass solution to this problem.
The front pointer will be n steps ahead of the back pointer. This will result
in the back pointer being the nth node from the end of the list once the front pointer
is None. During this, we are keeping track of the node previous to the back pointer
so that we can point the previous node to the node after the back pointer, removing the 
nth-node from the end. We must account for the possibility that if n equals the number 
of nodes then we are removing the head of the list, so we check for that condition 
and if it is true then we simply remove the head and declare head.next as the head of the list.
Otherwise, we remove the back node as usual.

This solution takes O(L) time and O(1) space where L is the number of nodes in the linked list.
*/

/*
 * Definition for singly-linked list.
 * */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next == null) {
    return null;
  }

  let front = head;
  let back = head;
  let count = 0;
  let prev = null;

  while (front != null) {
    if (count < n) {
      front = front.next;
    } else {
      front = front.next;
      prev = back;
      back = back.next;
    }
    count += 1;
  }

  if (prev == null) {
    head = back.next;
    back = null;
  } else {
    prev.next = back.next;
    back = null;
  }
  return head;
};
