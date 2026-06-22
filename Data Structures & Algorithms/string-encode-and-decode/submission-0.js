class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';

        for (const elem of strs) {
            encoded = encoded + elem.length + '#' + elem
        }

        console.log('Encoded text: ', encoded)
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) { 
        let decoded = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while(str[j] !== '#') {
                j++;
            }

            const length = Number(str.slice(i, j));

            const text = str.slice(j + 1, j + 1 + length);

            decoded.push(text)
            i = j + 1 + length;
        }

        return decoded;
    }
}
