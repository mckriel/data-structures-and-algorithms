// GRADING STUDENTS

// REQUIREMENTS
// take in an array of student grades - array of integers
// example input would be [74, 73, 72, 61, 35]
// grade is within range of 0 and 100
// grade < 40 is a failing grade (only if grade is < 38 because 38 would round up to 40)
// if grade - next multiple of 5 < 3, round up by next multiple of 5

// EXAMPLES
// grade = 84 rounds up to 85 (85 - 83 < 3)
// grade = 29 does not round (less than 38)
// grade = 84 rounds up to 85 (85 - 83 < 3)

// ASSUMPTIONS
// array values will always be 0-100
// array values will always be integers (no floats, strings, etc)
// array length does not matter, there could be 1000 grades
//

// APPROACH
// blueprint a solutio
// break down each chunk of work that needs to happen
// look into how rounding works with js specifically and how we will round up to the nearest multiple of 5
// debug as we go along with console logs
// implement a brute force/first attempt version of the code
// get to a working solution
// analyze for improvements
// analyze code and look for ways to make the code more readable, cleaner and effecient as possible
// add some checks for correct inputs

// PSEUDOCODE / BREAKDOWN
// loop over the amount of values in the array (array.length)
// check for failing grade first (less than 38) - avoids extra checks and computations
// Math.ceil(num / 5) * 5 to get next multiple of 5
// round up or keep the same accordingly
//
// loop - done
// check for rounded - score < 3 - done
//      if true round up - editing the value in the array - done
//      if false stay the same

// Brute force / first attempt
// function gradingStudents(grades) {
//     for (let i = 1; i < grades[0] + 1; i++) {
//         let rounded = Math.ceil(grades[i] / 5) * 5;
//         if (grades[i] < 38) {
//             console.log(grades[i]);
//             break;
//         } 
//         else if (rounded - grades[i] < 3) {
//             grades[i] = rounded;
//             console.log(grades[i]);
//         } 
//         else {
//             console.log(grades[i]);
//         }
//     }
// }


function gradingStudents(grades) {
    let result = [];
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i]
        if (grade < 38) {
            result.push(grade);
            continue;
        }
        let rounded = Math.ceil(grade / 5) * 5;
        if (rounded - grade < 3) {
            result.push(rounded);
        } 
        else {
            result.push(grade);
        } 
    }
    return result;
}

console.log(gradingStudents([4, 73, 67, 38, 33]));
