/*
APPLE AND ORANGE TREE PROBLEM

s = start of house
t = end of house
a = location of apple tree
b = location of orange tree
apples = integer array, distance which each apple falls from the tree
oranges = integer array, distance which each orange falls from the tree

INPUT FORMAT:
7 11 -> values of s and t - start and end of the house
5 15 -> a & b - apple and orange tree location
3 2 -> amount of apples & amount of oranges
-2 2 1 -> fall values for apples
5 -6 -> fall values for oranges

OUTPUT:
1
1

STEPS:
1. determine the range the house falls into
2. determine apple tree location & orange tree location
3. cycle through the apples doing a sum to check if outcome falls within the range of the house
4. cycle through the oranges doing a sum to check if outcome falls within the range of the house
5. increment a count for each apple and oranges falling into the range


// PSEUDO CODE
function countApplesAndOranges() {
    loop through apples {
        if apple position within range {
            apple++
        }
    }
    loop through oranges {
        if orange position within range {
            orange++
        }
    }
    print apples
    print oranges
}


*/

function countApplesAndOranges (
    s, t, 
    a, b, 
    apples, 
    oranges
) {
	let appleCount = 0, orangeCount = 0;

	for (let i = 0; i < apples.length; i++) {
		let appleFallPosition = a + apples[i];
		if (appleFallPosition >= s && appleFallPosition <= t) appleCount++;
	}

	for (let j = 0; j < oranges.length; j++) {
		let orangeFallPosition = b + oranges[j];
		if (orangeFallPosition >= s && orangeFallPosition <= t) orangeCount++;
	}

	console.log(appleCount);   
	console.log(orangeCount);   
}

// countApplesAndOranges(5, 10, 1, 15, [6, 7, 8], [6, 7, 8]);
countApplesAndOranges(5, 10, 1, 15, [-6, -7, -8], [6, 7, 8]);

function sum(a, b) {
    
}