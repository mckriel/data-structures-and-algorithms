// Option 1 - Sort and compare
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i =1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true
        }
    }

    return false
}

// Option 2 - Use set
var containsDuplicate = function(nums) {
    const numSet = new Set();

    for (const n of nums) {
        if (numSet.has(n)) {
            return true;
        }
        numSet.add(n);
    }

    return false;
}

// Option 3 - Compare set length
var containsDuplicate = function(nums) {
    
}