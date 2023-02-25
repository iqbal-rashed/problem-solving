function longestCommonPrefix(strs: string[]): string {
    let result = "";

    if (strs.length == 1) {
        return strs.toString();
    }

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];

        for (let j = 0; j < str.length; j++) {
            const char = str[j];
            if (isCharExist(char, strs)) {
                if (!result.includes(char)) {
                    const newResult = result + char;
                    if (str.startsWith(newResult)) {
                        result += char;
                    }
                }
            }
        }
    }

    return result;
}

function isCharExist(char: string, strs: string[]) {
    let result = 0;
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        if (str.includes(char)) {
            result++;
        }
    }
    return result === strs.length ? true : false;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
