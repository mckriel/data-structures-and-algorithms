// TWO SUM

function twoSum(numbersArray, target) {
    let hash = [];
    for (let i = 0; i < numbersArray.length; i++) {
        let compliment = target - numbersArray[i];
        if (compliment in hash) return [hash[compliment], i];
        hash[numbersArray[i]] = i;
    }
    return [];
}

const array1 = [-1, 3, 7, 4];
const array2 = [2, 3, -8, 6];
const array3 = [0, -5, 7, 9];

console.log(twoSum(array1, 2));
console.log(twoSum(array2, -2));
console.log(twoSum(array3, 4));


function twoSum(array, target) {
    let hash = [];
    for (let i = 0; i < array.length; i++) {
        compliment = target - array[i];
        if (compliment in hash) return [hash[compliment], i];
        hash[array[i]] = i;
    }
    return [];
}

// take the in array of numbers and a target value we are looking for
// make a hashtable which will store a compliment and that compliments position in the hash
// if i = 0 and value = 2 => hash[array[i]] = i => hash[2] = 0 => {2: 0}
// if i = 1 and value = 3 => hash[array[i]] = i => hash[3] = 0 => {3: 0}, etc


function moveZeroes(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right ++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++
        }
    }
    return nums;
}