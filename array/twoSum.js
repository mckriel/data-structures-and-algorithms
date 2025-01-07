function twoSum(numbers, target) {
    // create a hashmap
    const hash = {};

    // iterate through the array of numbers
    for (let i = 0; i < numbers.length; i++) {
        // calculate the complement
        let complement = target - numbers[i];
        // check if complement in hash
        if (complement in hash) {
            // if true, return array of [complement position, current position]
            return [hash[complement], i];
        }
        // add to array if complement not found
        hash[numbers[i]] = i;
    }
    return [];
}

const array1 = [-1, 3, 7, 4];
const array2 = [2, 3, -8, 6];
const array3 = [0, -5, 7, 9];

console.log(twoSum(array1, 2));
console.log(twoSum(array2, -2));
console.log(twoSum(array3, 4));