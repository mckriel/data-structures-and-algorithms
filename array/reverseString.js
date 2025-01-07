// own implementation
function reverseString(item) {
    if (!item || item.length < 2 || typeof item !== 'string') {
        return 'incorrect input';
    }

    const backwards = [];
    const totalItems = item.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(item[i]);
    }

    return backwards.join('');
}

// built in methods
function reverseString2(item) {
    return item.split('').reverse().join('');
}

// arrow function
const reverse3 = str => str.split('').reverse().join('');


