function myPow(x: number, n: number): number {
    let result = x;

    if (n > 0) {
        for (let i = 1; i < n; i++) {
            result *= x;
        }
    } else if (n < 0) {
        for (let i = n; i <= 0; i++) {
            result /= x;
        }
    } else {
        result = 1;
    }

    return result;
}

console.log(myPow(2, -2147483648));
