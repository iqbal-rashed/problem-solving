var plusOne = function (digits) {
    var str = "";
    for (let i = 0; i < digits.length; i++) {
        str = str + digits[i];
    }
    str = BigInt(str) + BigInt(1);
    str = String(str);
    var result = [];
    for (let i = 0; i < str.length; i++) {
        result[i] = str[i];
    }
    return result;
};

digits = [1, 2, 3];
console.log(plusOne(digits));
