// // compare triplets
// let result = [0, 0];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             result[0] += 1;
//         } else if (a[i] < b[i]) {
//             result[1] += 1;
//         }
//     }
//     return result;



// function aVeryBigSum(ar) {
// 	let a = 0;
// 	ar.forEach(element => {
// 		a += element
// 	});

// }


/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

let array1 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
let array2 = [[11, 2, 4, 5], [4, 5, 6, 5], [10, 8, -12, 5], [10, 8, -12, 5]];

function diagonalDifference(arr) {
	let a = 0;
	for (i = 0; i < arr.length; i++) {
		a += arr[i][i];
	}

	let b = 0;
	for (j = 0; j < arr.length; j++) {
		b += arr[j][(arr.length - 1) - j]
	}

	return Math.abs(a - b);

}

console.log(diagonalDifference(array1));
console.log(diagonalDifference(array2));


function diagonalDifference2(arr) {
	let a, b = 0;

	for (i = 0; i < arr.length; i++) {
		a += arr[i][i];
		b += arr[i][arr.length - 1 - i];
	}

	return Math.abs(a-b);
}

function diagonalDifference3(arr) {
	let primarySum = 0, secondarySum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        primarySum += arr[i][i]; 
        secondarySum += arr[i][arr.length - 1 - i]; 
    }

    return Math.abs(primarySum - secondarySum);
}

