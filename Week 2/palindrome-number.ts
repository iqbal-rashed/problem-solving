function isPalindrome(x: number): boolean {
    const ltr = x.toString();
    let rtl = "";
    for (let i = ltr.length - 1; i >= 0; i--) {
        rtl += ltr[i];
    }
    return rtl === ltr;
}

console.log(isPalindrome(121));
