

// SOLUTION:
// determine the highest value in the array
// return the count of that highest number

function birthdayCakeCandles(candles) {
    let count = 0, highest = 0;
	for (let i = 0; i < candles.length; i++) {
		if (candles[i] > highest) {
			highest = candles[i];
			count = 1;
		} else if (candles[i] === highest) {
			count++;
		}
	}
	return count;
}

birthdayCakeCandles([1, 2, 3, 4, 4]);