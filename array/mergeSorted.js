function mergeArrays(array1, array2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            mergedArray.push(array1[i]);
            i++;
        }
        else {
            mergedArray.push[array2[j]];
            j++;
        }
    }

    while (i < array1.length) {
        mergedArray.push(array1[i]);
        i++;
    }

    while (j < array2.length) {
        mergedArray.push(array2[j]);
        j++;
    }

    return mergedArray;
}

function mergedArray2(array1, array2) {
    const mergedArray = [...array1, ...array2];
    mergedArray.sort((a, b) => a - b);
    return mergedArray;
}

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let arrayItem1 = array1[0];
    let arrayItem2 = array2[0];

    if (array1.length === 0) {
        return array2;
    }

    if (array2.length === 0) {
        return array1;
    }

    while (arrayItem1 || arrayItem2) {
        
    }

    return mergedArray;
}


// console.log(mergedArray2([1, 3, 5], [6, 9, 2]));