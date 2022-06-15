'''
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
'''
class Solution:
    def isValidSudoku(self, board: list) -> bool:
        n = 9
        rows = [set() for _ in range(n)]
        cols = [set() for _ in range(n)]
        boxs = [set() for _ in range(n)]

        for row_idx in range(n):
            for col_idx in range(n):
                val = board[row_idx][col_idx]
                if val == ".":
                    continue
                #check row
                if val in rows[row_idx]:
                    return False
                rows[row_idx].add(val)
                #check column
                if val in cols[col_idx]:
                    return False
                cols[col_idx].add(val)
                #check box
                box_idx = (row_idx//3) * 3 + (col_idx//3)
                if val in boxs[box_idx]:
                    return False
                boxs[box_idx].add(val)
                
        return True
