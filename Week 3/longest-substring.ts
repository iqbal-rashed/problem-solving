function lengthOfLongestSubstring(s: string): number {
    let subStrArr: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const subStr = getSubString(s, i);
        subStrArr.push(subStr);
    }
    console.log(subStrArr);
    let result = 0;
    for (let i = 0; i < subStrArr.length; i++) {
        if (result < subStrArr[i].length) {
            result = subStrArr[i].length;
        }
    }
    return result;
}

function getSubString(s: string, i: number) {
    let currentStr = "";

    for (let j = i; j < s.length; j++) {
        let newChar = s[j];
        if (currentStr.includes(newChar)) {
            return currentStr;
        } else {
            currentStr += newChar;
        }
    }
    return currentStr;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
