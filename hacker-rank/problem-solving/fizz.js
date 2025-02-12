// FIZZ BUZZ
// loop from 1 -> 100, on number at a time
// if number is divisble by 5 & 3 -> print 'fizzbuzz'
// if number is divisible by 5 -> print 'fizz'
// if number is divisible by 3 -> print 'buzz'

// ASSUMPTIONS
// There will be errors in looping through the numbers, null or undefined
// the function/s will have inputs, just in case we would like to do others counts, lets say to 150, 200, 3000 etc.
// input is only ever going to be a positive integer

// APPROACH
// write some pseudo code and blueprint solution
// check that all the requirements are met
// do some kind of debugging as i go along
// first implementation is going to 'brute force' just to get it working
// some sort of basic big o scoring
// then we will analyze the function/s for improvements
// ultimate goal being the most cleanest, readable and most time/space complexity solution possible
// add some checks and balances to make sure theres no funny business

// if we make use of typescript package we can strongly type this too.

// either printing numbers, or the words specified
// checking divisibility (modulo) with if statements
// looping / counting from 1 - 100

// PSEUDO CODE
// loop from 1 -> total
// check divisibility
// print accordingly

// Our first, lets just get this thing working approach
function fizzbuzz(total) {
	if (!Number.isInteger(total) || total <= 0) {
		throw new Error("Input must be a positive integer");
	}
	// O(n)
    for (let i = 1; i <= total; i++) {
        if (i % 5 === 0 && i % 3 === 0) console.log(`fizzbuzz`);
        else if (i % 5 === 0) console.log('fizz');
        else if (i % 3 === 0) console.log('buzz');
        else console.log(i);
    }
}

// O(n) time complexity
function fizzbuzzbazz(total) {
	if (!Number.isInteger(total) || total <= 0) {
		throw new Error("Input must be a positive integer");
	}

    for (let i = 1; i <= total; i++) {
		output = ``;
		if (i % 3 === 0) output += `Fizz`;
		if (i % 5 === 0) output += `Buzz`;
		if (i % 7 === 0) output += `Bazz`;
		console.log(output || i);
    }
}

fizzbuzzbazz(100);
