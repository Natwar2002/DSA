function multiplyStrings(num1, num2) {
    // If either number is "0", the product is "0"
    if (num1 === "0" || num2 === "0") return "0";

    // Initialize the result array with zeros
    let m = num1.length, n = num2.length;
    let result = new Array(m + n).fill(0);

    // Reverse the numbers to make it easier to calculate from right to left
    num1 = num1.split('').reverse().join('');
    num2 = num2.split('').reverse().join('');

    // Multiply each digit of the first number with each digit of the second number
    // num1 = 111    num2 = 222
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let mul = (num1[i] - '0') * (num2[j] - '0');
            let sum = mul + result[i + j];
            result[i + j] = sum % 10;
            result[i + j + 1] += Math.floor(sum / 10);
        }
    }

    // Remove leading zeros from the result array and convert to a string
    while (result.length > 1 && result[result.length - 1] === 0) {
        result.pop();
    }

    return result.reverse().join('');
}

// Example usage:
console.log(multiplyStrings("123", "456"));  // Output: "56088"
console.log(multiplyStrings("123456789", "987654321"));  // Output: "121932631112635269"
