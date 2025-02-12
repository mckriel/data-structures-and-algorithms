// calculate ratio of elements that are positive, negative and zero
// display them in decimal format, with 6 places after the decimal
// Example: arr = [1, 1, 0, -1 -1] -> 0.400000, 0.400000, 0.200000


// determine the ration (element count / 100) - Done
// total the amount of positive, negative and zero values - Done
// multiply amounts by ratio, ensure 6 decimal places
// add the ratios to an array
// console log out the values

function plusMinus(arr) {
    let ratio = (1/arr.length).toFixed(6);
    let positive = 0, negative = 0, zero = 0;
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positive++;
        else if (arr[i] < 0) negative++;
        else zero++;
    }

    console.log((positive * ratio).toFixed(6));
    console.log((negative * ratio).toFixed(6));
    console.log((zero * ratio).toFixed(6));
}

function plusMinus1(arr) {
    let positive = 0, negative = 0, zero = 0;

    arr.forEach(number => {
        if (number > 0) positive++;
        else if (number < 0) negative++;
        else zero++;
    });

    let ratio = 1 / arr.length;

    console.log((positive * ratio).toFixed(6));
    console.log((negative * ratio).toFixed(6));
    console.log((zero * ratio).toFixed(6));
}

plusMinus1([1, 2, 0, 0, -3, -3, -3]);

