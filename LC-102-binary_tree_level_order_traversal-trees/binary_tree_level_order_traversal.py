'''
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
'''
# Definition for a binary tree node.
import collections
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: TreeNode) -> list:
        if not root:
            return []
        queue = collections.deque([])
        queue.append(root)
        level_nodes = collections.deque([])
        level_order_nodes = []
        while queue:
            level = []
            while queue:
                node = queue.popleft()
                level.append(node.val)
                level_nodes.append(node)
            
            while level_nodes:
                node = level_nodes.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                    
            level_order_nodes.append(level)
            
        return level_order_nodes
    
      
            