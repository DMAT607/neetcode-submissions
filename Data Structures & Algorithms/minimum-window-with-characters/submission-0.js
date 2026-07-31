class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tMap = new Map();

        for (let i = 0; i < t.length; i++) {
            const curChar = t[i];
            tMap.set(curChar, (tMap.get(curChar) || 0) + 1);
        }
        const required = tMap.size;
        let left = 0;

        let curWindow = new Map();
        let minLength = Infinity;
        let found = 0;
        let start = 0;

        for (let right = 0; right < s.length; right++) {
            const rightChar = s[right];

            curWindow.set(rightChar, (curWindow.get(rightChar) || 0) + 1);
            if (tMap.has(rightChar) && tMap.get(rightChar) === curWindow.get(rightChar)) {
                found++;
            }

            while (found === required) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    start = left;
                }

                const leftChar = s[left];
                curWindow.set(leftChar, (curWindow.get(leftChar) || 0) - 1);

                if(tMap.has(leftChar) && curWindow.get(leftChar) < tMap.get(leftChar)) {
                    found--;
                }
                left++;
            }
        }
        return minLength === Infinity ? "" : s.substring(start, start + minLength);
    }
}
