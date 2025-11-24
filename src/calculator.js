function sum(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0;
    }
    const total = numbers.reduce((acc, n) => acc + Number(n), 0);
    return total / numbers.length;
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    average
};
