function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
}

staircase(5);

// function called with a number as input
// a for loop is initialized
// i is set to 1, i <= 5, i is incremented on each pass
// space is repeated n - i times, # is repeated i times
// i is incremented, process repeates

// 1st pass: print ' ' n - i times = 5 - 1 = 4 times, # is printed i times = 1 time
// 2nd pass: print ' ' n - i times = 5 - 2 = 3 times, # is printed i times = 2 times
// 3rd pass: print ' ' n - i times = 5 - 3 = 2 times, # is printed i times = 3 times
// and so on

