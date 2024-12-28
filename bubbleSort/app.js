function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i + 1]
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // After each pass, the largest element is in its correct position
        n--;
    } while (swapped);

    return arr;
}

// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array));
