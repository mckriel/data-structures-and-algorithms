// bublle sort
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

console.log(bubbleSort([5, 6, 1, 4, 3])) // output = [ 1, 3, 4, 5, 6 ]

// find pairs
function findPairs(array, target) {
    
}