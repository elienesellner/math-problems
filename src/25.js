let n = 5;

function sumEven(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
}

console.log(sumEven(n));
