function sumOfDigits(n) {
    if (n === 0) return 0;

    return (n % 10) + sumOfDigits(Math.floor(n/10));
}


function sumOfDigits2(number) {
    // Base case: if the number is 0, return 0
    if (number === 0) return 0;

    // Get the last digit of the number
    const lastDigit = number % 10;

    // Remove the last digit from the number
    const remainingNumber = Math.floor(number / 10);

    // Recursively call the function with the remaining number and add the last digit
    return lastDigit + sumOfDigits(remainingNumber);
}

// Taking a really big number and modulo'n it to give the remaining value.
// 5442231 -> first pass will return 1, 
// then remove the 1 by dividing by 10 and rounding down
// 5442231 -> 544223.1 -> rounded down to 544223
// 544223 -> gets 3 from the modulo, removes the 3 from the number, adds 3 to 1
// and on and on


console.log(`Output: ${sumOfDigits2(5442231)}`);

function power(a, b) {
    if (b === 0) return 1;

    return a * power(a, b - 1);
}

console.log(power(2, 3));


function isPalindrome(str) {
    // Base case
    if (str.length <= 1) return true;
  
    // Recursive case
    if (str[0] !== str[str.length - 1]) return false;
  
    return isPalindrome(str.slice(1, -1));
  }