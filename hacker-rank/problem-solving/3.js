function miniMaxSum(arr) {
    let arrayMax = 0;
    for (let i = 0; i < arr.length; i++) {
        arrayMax += arr[i];
    }
    // console.log(`Array maximum: ${arrayMax}`);

    let arrayTotals = [];

    for (let j = 0; j < arr.length; j++) {
        arrayTotals.push(arrayMax - arr[j]);
    }
    // console.log(`Array of sum totals: ${arrayTotals}`);
    
    let minimum = arrayTotals[0];
    let maximum = arrayTotals[0];

    for (let num of arrayTotals) {
        if (num < minimum) minimum = num;
        if (num > maximum) maximum = num;
    }
    console.log(minimum, maximum);
}

function miniMaxSum1(arr) {
    let arrayMax = 0;
    for (let i = 0; i < arr.length; i++) {
        arrayMax += arr[i];
    }

    let arrayTotals = [];
    for (let j = 0; j < arr.length; j++) {
        arrayTotals.push(arrayMax - arr[j]);
    }

    console.log(Math.min(...arrayTotals), Math.max(...arrayTotals));
}

function miniMaxSum2(arr) {
    let totalSum = 0;
    let minVal = Infinity;
    let maxVal = -Infinity;

    for (let num of arr) {
        totalSum += num;
        if (num < minVal) minVal = num;
        if (num > maxVal) maxVal = num;
    }
	
    console.log(totalSum - maxVal, totalSum - minVal);
}

miniMaxSum2([1, 2, 3, 4, 5]);