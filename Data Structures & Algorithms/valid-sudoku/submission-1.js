class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowWise = new Map();
        let columnWise = new Map();
        let boxWise = new Map();

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                const number = board[row][col];
                if (number === '.') continue;

                if (!rowWise.has(row)) {
                    rowWise.set(row, new Set());
                }
                if (rowWise.get(row).has(number)) return false;
                rowWise.get(row).add(number);

                if (!columnWise.has(col)) {
                    columnWise.set(col, new Set());
                }
                if (columnWise.get(col).has(number)) return false;
                columnWise.get(col).add(number);

                const boxNum = Math.floor(row / 3) * 3 - Math.floor(col / 3);
                if (!boxWise.has(boxNum)) {
                    boxWise.set(boxNum, new Set());
                }
                if (boxWise.get(boxNum).has(number)) return false;
                boxWise.get(boxNum).add(number);
            }
        }
        return true;
    }
}
