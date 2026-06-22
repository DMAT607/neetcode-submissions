class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowWise = Array.from({length: 9}, () => new Set());
        let colWise = Array.from({length: 9}, () => new Set());
        let boxWise = Array.from({length: 9}, () => new Set());

        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                const value = board[row][col];

                if(value === '.') continue;

                const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                if(
                    rowWise[row].has(value) ||
                    colWise[col].has(value) ||
                    boxWise[box].has(value)
                ) {
                    return false;
                }

                rowWise[row].add(value);
                colWise[col].add(value);
                boxWise[box].add(value);
            }
        }
        return true;
    }
}
