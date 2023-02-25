let remove = {
    IV: 2,
    IX: 2,
    XL: 20,
    XC: 20,
    CD: 200,
    CM: 200,
};

let add = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

var romanToInt = function (s = "") {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        result += add[s[i]];
    }

    Object.keys(remove).forEach((key) => {
        if (s.includes(key)) {
            result -= remove[key];
        }
    });
    return result;
};

console.log(romanToInt("MCMXCIVIV"));
