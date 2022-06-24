'''
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
'''
# definition for singly-linked-list
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        carry = 0
        dummy_head = ListNode(0)
        curr = dummy_head
        while l1 != None or l2 != None:
            x = l1.val if l1 else 0
            y = l2.val if l2 else 0
            
            total = x + y + carry
            carry = total // 10
            curr.next = ListNode(total % 10)
            curr = curr.next
            l1 = l1.next if l1 else l1
            l2 = l2.next if l2 else l2
            
        if carry > 0:
            curr.next = ListNode(carry)
        
        return dummy_head.next
