// Pentru a converti un număr dintr-o bază arbitrară în cod ASCII și invers în JavaScript, poți folosi următorii pași:

// 1. Conversia dintr-o bază arbitrară în cod ASCII
// Pentru a converti un număr dintr-o bază arbitrară în cod ASCII, mai întâi trebuie să convertești numărul din baza respectivă
//  în baza 10 (decimal), apoi să obții caracterul ASCII corespunzător.

function convertFromBaseToASCII(numStr, base) {
    // Converteste numarul din baza data in baza 10
    let decimalNumber = parseInt(numStr, base);

    // Verifica daca numarul este un cod ASCII valid (0-127)
    if (decimalNumber >= 0 && decimalNumber <= 127) {
        // Converteste numarul in caracterul ASCII corespunzator
        return String.fromCharCode(decimalNumber);
    } else {
        throw new Error("Numarul nu este un cod ASCII valid.");
    }
}

// Exemplu de utilizare:
let numStr1 = "65"; // Numarul in baza 10
let base1 = 10;
let asciiChar1 = convertFromBaseToASCII(numStr1, base1);
console.log(asciiChar1); // Output: 'A'

// 2. Conversia din cod ASCII într-o bază arbitrară
// Pentru a converti un caracter ASCII într-un număr într-o bază arbitrară,
//  mai întâi trebuie să obții codul ASCII al caracterului, apoi să convertești acel număr în baza dorită.

function convertFromASCIIToBase(asciiChar, base) {
    // Obtine codul ASCII al caracterului
    let decimalNumber = asciiChar.charCodeAt(0);

    // Converteste numarul din baza 10 in baza dorita
    return decimalNumber.toString(base);
}

// Exemplu de utilizare:
let asciiChar2 = 'A';
let base2 = 16;
let numStr2 = convertFromASCIIToBase(asciiChar2, base2);
console.log(numStr2); // Output: '41' (65 in baza 10 este 41 in baza 16)

// Explicație:
// parseInt(numStr, base): Convertește un șir de caractere numStr din baza base în număr zecimal.

// String.fromCharCode(decimalNumber): Convertește un număr zecimal într-un caracter ASCII.

// asciiChar.charCodeAt(0): Returnează codul ASCII al caracterului asciiChar.

// decimalNumber.toString(base): Convertește un număr zecimal într-un șir de caractere reprezentând numărul în baza base.

// Exemplu complet:


// Conversia din baza 16 in ASCII
let hexNumber = "41";
let asciiChar3 = convertFromBaseToASCII(hexNumber, 16);
console.log(asciiChar3); // Output: 'A'

// Conversia din ASCII in baza 8
let octalNumber = convertFromASCIIToBase(asciiChar, 8);
console.log(octalNumber); // Output: '101' (65 in baza 10 este 101 in baza 8)

// Aceste funcții te ajută să convertești între coduri ASCII și numere în diferite baze în JavaScript.