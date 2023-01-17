const x1 = -123;

function reverse(x: number) {
    if (Math.pow(-2, 31) < x && x > Math.pow(2, 31) - 1) {
        return 0;
    }

    if (x < 0) {
        const strArr = x.toString().split("");
        strArr.shift();

        return -BigInt(strArr.reverse().join(""));
    } else {
        return BigInt(x.toString().split("").reverse().join(""));
    }
}

console.log(reverse(x1));
