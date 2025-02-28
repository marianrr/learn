
// lista de adiacenta
class OptimizedGraphAdjacencyList {
    constructor(nodesCount) {
      this.size = nodesCount;
      this.list = Array.from({ length: nodesCount }, () => new Set());
    }
  
    addEdge(from, to, isDirected = false) {
      this.list[from].add(to);
      if (!isDirected) this.list[to].add(from);
    }
  
    getNeighbors(node) {
      return [...this.list[node]];
    }
  
    hasEdge(from, to) {
      return this.list[from].has(to);
    }
  }

// Testare Listă de Adiacență
const listGraph = new OptimizedGraphAdjacencyList(3);
listGraph.addEdge(0, 1);
listGraph.addEdge(1, 2, true);
console.log(listGraph.getNeighbors(1)); // [0, 2]
console.log(listGraph.hasEdge(0, 1)); // true

