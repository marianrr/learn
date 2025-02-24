function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Dacă lista are 0 sau 1 element, este deja sortată
    }

    // Alegem pivotul ca fiind ultimul element din listă
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    // Parcurgem lista și împărțim elementele în stânga și dreapta pivotului
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Aplicăm QuickSort recursiv pe sub-liste și combinăm rezultatele
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Exemplu de utilizare:
const arr = [10, 7, 8, 9, 1, 5];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [1, 5, 7, 8, 9, 10]
