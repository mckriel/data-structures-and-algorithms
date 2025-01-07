var maxSubArray = function(numbersArray) {

    let result = numbersArray[0];
    let total = 0;

    for (let n of numbersArray) {
        if (total < 0) {
            total = 0;
        }
        total += n;

        result = Math.max(result, total);
    }
    return result;
};
