function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the index of the smallest element in the remaining array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap if the minimum isn't already at the current position
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // ES6 swap
        }
    }

    return arr;
}

// Example usage
const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array)); // Output: [11, 12, 22, 25, 64]
