var myAtoi1 = function (s) {
    let j = 0;
    while (j < s.length && s[j] === " ") {
        j++;
    }

    let maxLen = getMaxLen(s);

    var result = "";
    for (let i = j; i <= maxLen; i++) {
        if (
            j === i &&
            s[i] != "-" &&
            s[i] != "+" &&
            String(Number(s[i])) == "NaN"
        )
            return 0;
        if (s[i] !== " ") {
            if (s[i] == "-" || s[i] == "+") {
                result = result + s[i];
            } else {
                if (String(Number(s[i])) != "NaN") {
                    result = result + s[i];
                }
            }
        }
    }
    var INT_MIN = -Math.pow(2, 31);
    var INT_MAX = Math.pow(2, 31) - 1;
    result = BigInt(result);
    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;
    return result;
};

var getMaxLen = (s) => {
    let maxLen = 0;
    while (maxLen < s.length) {
        if (s[maxLen] == ".") return maxLen;
        maxLen++;
    }
    return maxLen;
};

function myAtoi(s) {
    let i = 0;
    let sign = 1;
    let num = 0;
    let INT_MIN = -Math.pow(2, 31);
    let INT_MAX = Math.pow(2, 31) - 1;

    // ignore leading whitespaces
    while (i < s.length && s[i] === " ") {
        i++;
    }
    console.log(i, sign, num, INT_MAX, INT_MIN);
    // check for sign
    if (i < s.length && (s[i] === "-" || s[i] === "+")) {
        sign = s[i++] === "-" ? -1 : 1;
    }

    // read in digits
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        if (num > INT_MAX / 10 || (num === INT_MAX / 10 && s[i] > "7")) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        num = num * 10 + (s[i++] - "0");
    }

    return num * sign;
}

console.log(myAtoi1("3.14159"));
