function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are already sorted
    }

    const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) { // Partitioning
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort and combine
}

// Example usage
const array = [10, 5, 2, 3, 7, 6, 1, 9, 4, 8];
console.log(quickSort(array));
