function mergeSort(arr) {
    // Dacă array-ul are 0 sau 1 element, este deja sortat
    if (arr.length <= 1) {
        return arr;
    }

    // Împarte array-ul în două jumătăți
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Sortează fiecare jumătate recursiv
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Fuzionează cele două jumătăți sortate
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Combină cele două array-uri sortate
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Adaugă elementele rămase din left (dacă există)
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Adaugă elementele rămase din right (dacă există)
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Exemplu de utilizare
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [3, 9, 10, 27, 38, 43, 82]