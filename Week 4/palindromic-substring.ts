function longestPalindrome(s: string): string {
    if (s.length == 1) return s;
    let result: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const sub = palindromicChar(s, i);
        if (sub.length) result = result.concat(sub);
    }

    let subString = "";

    for (let i = 0; i < result.length; i++) {
        const str = result[i];
        if (str.length <= 3) {
            if (subString.length < str.length) {
                subString = str;
            }
        }
    }

    return subString ? subString : s[0];
}

function palindromicChar(s: string, i: number): string[] {
    let subStringArr: string[] = [];
    let subStr = "";
    for (let j = i; j < s.length; j++) {
        const newChar = s[j];

        if (j != i) {
            if (subStr === reverseString(subStr)) {
                subStringArr[subStringArr.length] = subStr;
                subStr += newChar;
            } else {
                subStr += newChar;
            }
        } else {
            subStr += newChar;
        }
    }
    return subStringArr;
}

function reverseString(s: string): string {
    let result = "";
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
}

console.log(longestPalindrome("babad"));
