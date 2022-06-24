/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummy_head = new ListNode(0);
  let curr = dummy_head;

  while (l1 != null || l2 != null) {
    let x = l1 != null ? l1.val : 0;
    let y = l2 != null ? l2.val : 0;
    let total = x + y + carry;
    let next = new ListNode(total % 10);
    curr.next = next;
    curr = curr.next;
    carry = Math.floor(total / 10);

    l1 = l1 != null ? l1.next : l1;
    l2 = l2 != null ? l2.next : l2;
  }

  if (carry > 0) {
    let next = new ListNode(carry);
    curr.next = next;
  }

  return dummy_head.next;
};
