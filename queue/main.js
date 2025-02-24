// Definim clasa Queue (Coadă)
class Queue {
    // Constructorul clasei, care inițializează o coadă goală
    constructor() {
      this.items = []; // Un array gol pentru a stoca elementele cozii
    }
  
    // Metoda enqueue adaugă un element la sfârșitul cozii
    enqueue(element) {
      this.items.push(element); // Folosim metoda push pentru a adăuga elementul în array
    }
  
    // Metoda dequeue elimină și returnează primul element din coadă
    dequeue() {
      // Verificăm dacă coada este goală folosind metoda isEmpty
      return this.isEmpty() ? "Queue is empty" : this.items.shift();
      // Dacă coada este goală, returnăm un mesaj, altfel eliminăm și returnăm primul element
    }
  
    // Metoda peek returnează primul element din coadă fără a-l elimina
    peek() {
      // Verificăm dacă coada este goală
      return this.isEmpty() ? "Queue is empty" : this.items[0];
      // Dacă coada este goală, returnăm un mesaj, altfel returnăm primul element
    }
  
    // Metoda isEmpty verifică dacă coada este goală
    isEmpty() {
      return this.items.length === 0; // Returnează true dacă coada este goală, altfel false
    }
  
    // Metoda size returnează numărul de elemente din coadă
    size() {
      return this.items.length; // Returnează lungimea array-ului items
    }
  
    // Metoda print afișează elementele cozii sub forma unui șir de caractere
    print() {
      console.log(this.items.join(" -> ")); // Folosim join pentru a concatena elementele cu " -> "
    }
  }
  
  // Exemplu de utilizare a clasei Queue
  const queue = new Queue(); // Cream o nouă instanță a cozii
  
  // Adăugăm elemente în coadă
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  
  // Afișăm coada
  queue.print(); // Va afișa: 1 -> 2 -> 3 -> 4 -> 5
  
  // Eliminăm primul element din coadă și îl afișăm
  console.log(queue.dequeue()); // Va afișa: 1
  
  // Afișăm primul element din coadă fără a-l elimina
  console.log(queue.peek()); // Va afișa: 2
  
  // Afișăm numărul de elemente din coadă
  console.log(queue.size()); // Va afișa: 4
  
  // Afișăm coada după operațiile de mai sus
  queue.print(); // Va afișa: 2 -> 3 -> 4 -> 5