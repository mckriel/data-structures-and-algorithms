// O(n^2)
var returnDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; i++) {
            if (nums[i] === nums[j]) {
                return nums[i];
            }
        }
    }
    return undefined;
}

// Option 1 - Sort and compare
var returnDuplicate = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i =1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return nums[i];
        }
    }

    return undefined;
}

// Option 2 - Use set
var returnDuplicate = function(nums) {
    const numSet = new Set();

    for (const n of nums) {
        if (numSet.has(n)) {
            return n;
        }
        numSet.add(n);
    }

    return undefined;
}