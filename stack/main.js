class Stack {
    constructor() {
        this.items = [];
    }

    // Adaugă un element în vârful stivei
    push(element) {
        this.items.push(element);
    }

    // Elimină și returnează elementul din vârful stivei
    pop() {
        if (this.isEmpty()) {
            return "Stiva este goală";
        }
        return this.items.pop();
    }

    // Returnează elementul din vârful stivei fără a-l elimina
    peek() {
        if (this.isEmpty()) {
            return "Stiva este goală";
        }
        return this.items[this.items.length - 1];
    }

    // Verifică dacă stiva este goală
    isEmpty() {
        return this.items.length === 0;
    }

    // Returnează dimensiunea stivei
    size() {
        return this.items.length;
    }

    // Golește stiva
    clear() {
        this.items = [];
    }

    // Afișează conținutul stivei
    print() {
        console.log(this.items.toString());
    }
}

// Exemplu de utilizare
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Afișează: 10,20,30
console.log(stack.pop()); // Afișează: 30
console.log(stack.peek()); // Afișează: 20
console.log(stack.size()); // Afișează: 2
console.log(stack.isEmpty()); // Afișează: false
stack.clear();
console.log(stack.isEmpty()); // Afișează: true
