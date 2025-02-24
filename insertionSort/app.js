function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage
const array = [5, 3, 8, 4, 2];
console.log(insertionSort(array)); // Output: [2, 3, 4, 5, 8]
