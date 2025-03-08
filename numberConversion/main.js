// Pentru a converti un număr dintr-o bază arbitrară în altă bază în JavaScript, poți folosi următorii pași:

// Convertirea din baza sursă în baza 10: Folosește parseInt pentru a converti numărul din baza sursă în baza 10.

// Convertirea din baza 10 în baza țintă: Folosește toString pentru a converti numărul din baza 10 în baza țintă.

// Iată un exemplu de funcție care face acest lucru:


function convertBase(num, fromBase, toBase) {
    // Convertim numărul din baza sursă în baza 10
    let decimal = parseInt(num, fromBase);

    // Convertim numărul din baza 10 în baza țintă
    let result = decimal.toString(toBase);

    return result;
}

// Exemplu de utilizare:
let num2 = "1A"; // Numarul în baza 16 (hexazecimal)
let fromBase2 = 16; // Baza sursă
let toBase2 = 2; // Baza țintă (binar)

let convertedNum2 = convertBase(num2, fromBase2, toBase2);
console.log(convertedNum2); // Output: "11010"

// parseInt(num, fromBase) convertește șirul num din baza fromBase în baza 10.

// decimal.toString(toBase) convertește numărul decimal (în baza 10) în baza toBase.

// Exemplu suplimentar:
// Dacă vrei să convertești numărul "1010" din baza 2 (binar) în baza 16 (hexazecimal):


let num3 = "1010";
let fromBase3 = 2;
let toBase3 = 16;

let convertedNum3 = convertBase(num3, fromBase3, toBase3);
console.log(convertedNum3); // Output: "A"
// Această funcție funcționează pentru baze între 2 și 36, deoarece parseInt și toString acceptă baze în acest interval.