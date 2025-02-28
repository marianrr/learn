// matrice de adiacenta

class GraphAdjacencyMatrix {
    constructor(nodesCount) {
      this.size = nodesCount;
      this.matrix = Array.from({ length: nodesCount }, () => 
        new Uint8Array(nodesCount).fill(0)
      );
    }
  
    addEdge(from, to, isDirected = false) {
      this.matrix[from][to] = 1;
      if (!isDirected) this.matrix[to][from] = 1;
    }
  
    getNeighbors(node) {
      const neighbors = [];
      for (let i = 0; i < this.size; i++) {
        if (this.matrix[node][i]) neighbors.push(i);
      }
      return neighbors;
    }
  
    hasEdge(from, to) {
      return this.matrix[from][to] === 1;
    }
  }


  // Testare Matrice de Adiacență
const matrixGraph = new GraphAdjacencyMatrix(3);
matrixGraph.addEdge(0, 1);
matrixGraph.addEdge(1, 2, true);
console.log(matrixGraph.getNeighbors(1)); // [0, 2]
console.log(matrixGraph.hasEdge(2, 1)); // false