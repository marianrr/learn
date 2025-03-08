În JavaScript, există mai multe moduri de a crea obiecte. Iată cele mai comune metode:

1. Object Literal
Cel mai simplu mod de a crea un obiect este folosind sintaxa literală a obiectului.

javascript
Copy
const obiect = {
    proprietate1: 'valoare1',
    proprietate2: 'valoare2',
    metoda: function() {
        console.log('Aceasta este o metodă');
    }
};
2. Constructor Function
Poți crea un obiect folosind o funcție constructor. Aceasta este o funcție obișnuită care este apelată cu new.

javascript
Copy
function Masina(marca, model) {
    this.marca = marca;
    this.model = model;
    this.afiseazaDetalii = function() {
        console.log(`Marca: ${this.marca}, Model: ${this.model}`);
    };
}

const masinaMea = new Masina('Toyota', 'Corolla');
masinaMea.afiseazaDetalii();
3. Object.create()
Metoda Object.create() creează un nou obiect, folosind un obiect existent ca prototip al obiectului nou creat.

javascript
Copy
const prototip = {
    afiseaza: function() {
        console.log(`Marca: ${this.marca}, Model: ${this.model}`);
    }
};

const masinaMea = Object.create(prototip);
masinaMea.marca = 'Toyota';
masinaMea.model = 'Corolla';
masinaMea.afiseaza();
4. Class Syntax (ES6)
Începând cu ES6, poți folosi clase pentru a crea obiecte. Clasele sunt o sintaxă mai modernă și mai clară pentru funcțiile constructor.

javascript
Copy
class Masina {
    constructor(marca, model) {
        this.marca = marca;
        this.model = model;
    }

    afiseazaDetalii() {
        console.log(`Marca: ${this.marca}, Model: ${this.model}`);
    }
}

const masinaMea = new Masina('Toyota', 'Corolla');
masinaMea.afiseazaDetalii();
5. Factory Function
O funcție fabrică este o funcție care returnează un obiect nou. Este o alternativă la funcțiile constructor.

javascript
Copy
function creazaMasina(marca, model) {
    return {
        marca: marca,
        model: model,
        afiseazaDetalii: function() {
            console.log(`Marca: ${this.marca}, Model: ${this.model}`);
        }
    };
}

const masinaMea = creazaMasina('Toyota', 'Corolla');
masinaMea.afiseazaDetalii();
6. Singleton Pattern
Un singleton este un obiect care este instanțiat o singură dată. Dacă încerci să creezi o nouă instanță, vei primi aceeași instanță creată anterior.

javascript
Copy
const singleton = (function() {
    let instance;

    function createInstance() {
        return {
            proprietate: 'valoare',
            metoda: function() {
                console.log('Aceasta este o metodă');
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const obiect1 = singleton.getInstance();
const obiect2 = singleton.getInstance();

console.log(obiect1 === obiect2); // true
7. Object.assign()
Object.assign() poate fi folosit pentru a crea un obiect nou prin copierea proprietăților din unul sau mai multe obiecte sursă.

javascript
Copy
const obiect1 = { a: 1 };
const obiect2 = { b: 2 };
const obiectNou = Object.assign({}, obiect1, obiect2);

console.log(obiectNou); // { a: 1, b: 2 }
8. Spread Operator (ES6)
Operatorul spread (...) poate fi folosit pentru a crea un obiect nou prin copierea proprietăților din alte obiecte.

javascript
Copy
const obiect1 = { a: 1 };
const obiect2 = { b: 2 };
const obiectNou = { ...obiect1, ...obiect2 };

console.log(obiectNou); // { a: 1, b: 2 }
9. Using new Object()
Poți crea un obiect folosind constructorul Object.

javascript
Copy
const obiect = new Object();
obiect.proprietate1 = 'valoare1';
obiect.proprietate2 = 'valoare2';
obiect.metoda = function() {
    console.log('Aceasta este o metodă');
};
10. Using Object.fromEntries() (ES10)
Object.fromEntries() transformă o listă de perechi cheie-valoare într-un obiect.

javascript
Copy
const entries = [['a', 1], ['b', 2]];
const obiect = Object.fromEntries(entries);

console.log(obiect); // { a: 1, b: 2 }
Acestea sunt cele mai comune metode de a crea obiecte în JavaScript. Fiecare metodă are cazuri de utilizare specifice și poate fi aleasă în funcție de nevoile proiectului tău.