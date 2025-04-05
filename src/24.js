function sum squares(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i * i;
    }
    return result;
}

console.log(sumSquares(5)); // Output: 55
