class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Map = new Map();
        let windowMap = new Map();
        let left = 0;

        for (let j = 0; j < s1.length; j++) {
            s1Map.set(s1[j], (s1Map.get(s1[j]) || 0) + 1);
        }

        for (let right = 0; right < s2.length; right++) {
            windowMap.set(s2[right], (windowMap.get(s2[right]) || 0) + 1);

            if (right - left + 1 > s1.length) {
                const leftChar = s2[left];

                windowMap.set(leftChar, windowMap.get(leftChar) - 1)

                if (windowMap.get(leftChar) === 0) {
                    windowMap.delete(s2[left]);
                }
                left++;
            }
            if (this.compareMaps(windowMap, s1Map)) return true;
        }
        return false;
    }

    compareMaps(map1, map2) {
        if (map1.size !== map2.size) return false;

        for (const [key, value] of map1) {
            if (map2.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
}
