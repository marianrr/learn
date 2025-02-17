function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const temp = new Array(arr.length);
    mergeSortHelper(arr, 0, arr.length - 1, temp);
    return arr;
}

function mergeSortHelper(arr, left, right, temp) {
    if (right - left <= 0) return;
    
    // Utilizăm Insertion Sort pentru subgrupuri mici
    if (right - left + 1 <= 32) {
        insertionSort(arr, left, right);
        return;
    }
    
    const mid = Math.floor((left + right) / 2);
    
    mergeSortHelper(arr, left, mid, temp);
    mergeSortHelper(arr, mid + 1, right, temp);
    
    // Verificăm dacă submulțimile sunt deja ordonate
    if (arr[mid] <= arr[mid + 1]) return;
    
    merge(arr, left, mid, right, temp);
}

function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        const current = arr[i];
        let j = i - 1;
        
        while (j >= left && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}

function merge(arr, left, mid, right, temp) {
    // Copiem segmentul curent în array-ul temporar
    for (let i = left; i <= right; i++) {
        temp[i] = arr[i];
    }
    
    let i = left;
    let j = mid + 1;
    let k = left;
    
    while (i <= mid && j <= right) {
        arr[k++] = temp[i] <= temp[j] ? temp[i++] : temp[j++];
    }
    
    // Copiem elementele rămase din partea stângă (dreapta e deja în ordine)
    while (i <= mid) {
        arr[k++] = temp[i++];
    }
}

console.log(mergeSort([3,2,6,1,8,9,4,2,5,4,3,7,9,10,22,12,14,11]))