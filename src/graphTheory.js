/**
 * Creates an adjacency matrix for a graph.
 * @param {number} vertices - The number of vertices in the graph.
 * @returns {number[][]} - An adjacency matrix initialized to 0.
 */
function createAdjacencyMatrix(vertices) {
    return Array.from({ length: vertices }, () => Array(vertices).fill(0));
}

/**
 * Adds an edge to an adjacency matrix.
 * @param {number[][]} matrix - The adjacency matrix.
 * @param {number} u - The start vertex.
 * @param {number} v - The end vertex.
 * @param {number} weight - The weight of the edge.
 */
function addEdgeToMatrix(matrix, u, v, weight = 1) {
    matrix[u][v] = weight;
    matrix[v][u] = weight; // For undirected graphs
}

/**
 * Creates an adjacency list for a graph.
 * @param {number} vertices - The number of vertices in the graph.
 * @returns {Map<number, number[]>} - An adjacency list.
 */
function createAdjacencyList(vertices) {
    const adjList = new Map();
    for (let i = 0; i < vertices; i++) {
        adjList.set(i, []);
    }
    return adjList;
}

/**
 * Adds an edge to an adjacency list.
 * @param {Map<number, number[]>} adjList - The adjacency list.
 * @param {number} u - The start vertex.
 * @param {number} v - The end vertex.
 * @param {number} weight - The weight of the edge.
 */
function addEdgeToList(adjList, u, v, weight = 1) {
    adjList.get(u).push({ vertex: v, weight });
    adjList.get(v).push({ vertex: u, weight }); // For undirected graphs
}

/**
 * Performs Breadth-First Search (BFS) on a graph.
 * @param {Map<number, number[]>} adjList - The adjacency list.
 * @param {number} start - The starting vertex.
 * @returns {number[]} - The BFS traversal order.
 */
function bfs(adjList, start) {
    const visited = new Set();
    const queue = [start];
    const result = [];
    
    while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
            queue.push(...adjList.get(vertex).map(edge => edge.vertex));
        }
    }
    return result;
}

/**
 * Performs Depth-First Search (DFS) on a graph.
 * @param {Map<number, number[]>} adjList - The adjacency list.
 * @param {number} start - The starting vertex.
 * @param {Set<number>} [visited=new Set()] - Set to track visited vertices.
 * @returns {number[]} - The DFS traversal order.
 */
function dfs(adjList, start, visited = new Set()) {
    visited.add(start);
    const result = [start];
    
    for (const edge of adjList.get(start)) {
        if (!visited.has(edge.vertex)) {
            result.push(...dfs(adjList, edge.vertex, visited));
        }
    }
    return result;
}

/**
 * Finds the shortest path using Dijkstra's algorithm.
 * @param {Map<number, number[]>} adjList - The adjacency list.
 * @param {number} start - The starting vertex.
 * @returns {Object} - An object with the shortest distances and previous nodes.
 */
function dijkstra(adjList, start) {
    const distances = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();
    
    adjList.forEach((_, vertex) => {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    });
    distances[start] = 0;
    priorityQueue.enqueue(start, 0);
    
    while (!priorityQueue.isEmpty()) {
        const { element: u } = priorityQueue.dequeue();
        
        adjList.get(u).forEach(edge => {
            const { vertex: v, weight } = edge;
            const alt = distances[u] + weight;
            if (alt < distances[v]) {
                distances[v] = alt;
                previous[v] = u;
                priorityQueue.enqueue(v, alt);
            }
        });
    }
    
    return { distances, previous };
}

/**
 * Finds the shortest path using Bellman-Ford algorithm.
 * @param {number[][]} edges - The edges of the graph as [u, v, weight].
 * @param {number} vertices - The number of vertices.
 * @param {number} start - The starting vertex.
 * @returns {Object} - An object with the shortest distances and previous nodes.
 */
function bellmanFord(edges, vertices, start) {
    const distances = Array(vertices).fill(Infinity);
    const previous = Array(vertices).fill(null);
    
    distances[start] = 0;
    
    for (let i = 0; i < vertices - 1; i++) {
        edges.forEach(([u, v, weight]) => {
            if (distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
                previous[v] = u;
            }
        });
    }
    
    // Check for negative-weight cycles
    edges.forEach(([u, v, weight]) => {
        if (distances[u] + weight < distances[v]) {
            throw new Error('Graph contains a negative-weight cycle');
        }
    });
    
    return { distances, previous };
}

/**
 * Finds the Minimum Spanning Tree using Kruskal's algorithm.
 * @param {number[][]} edges - The edges of the graph as [u, v, weight].
 * @param {number} vertices - The number of vertices.
 * @returns {number[][]} - The edges in the Minimum Spanning Tree.
 */
function kruskal(edges, vertices) {
    edges.sort((a, b) => a[2] - b[2]);
    
    const parent = Array(vertices).fill(null).map((_, i) => i);
    const rank = Array(vertices).fill(0);
    
    function find(u) {
        if (parent[u] !== u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }
    
    function union(u, v) {
        const rootU = find(u);
        const rootV = find(v);
        if (rootU !== rootV) {
            if (rank[rootU] > rank[rootV]) {
                parent[rootV] = rootU;
            } else if (rank[rootU] < rank[rootV]) {
                parent[rootU] = rootV;
            } else {
                parent[rootV] = rootU;
                rank[rootU]++;
            }
        }
    }
    
    const mst = [];
    edges.forEach(([u, v, weight]) => {
        if (find(u) !== find(v)) {
            union(u, v);
            mst.push([u, v, weight]);
        }
    });
    
    return mst;
}

/**
 * Finds the Minimum Spanning Tree using Prim's algorithm.
 * @param {Map<number, number[]>} adjList - The adjacency list.
 * @param {number} start - The starting vertex.
 * @returns {number[][]} - The edges in the Minimum Spanning Tree.
 */
function prim(adjList, start) {
    const edges = [];
    const visited = new Set();
    const priorityQueue = new PriorityQueue();
    
    priorityQueue.enqueue(start, 0);
    
    while (!priorityQueue.isEmpty()) {
        const { element: u } = priorityQueue.dequeue();
        if (visited.has(u)) continue;
        
        visited.add(u);
        
        adjList.get(u).forEach(edge => {
            const { vertex: v, weight } = edge;
            if (!visited.has(v)) {
                priorityQueue.enqueue(v, weight);
                edges.push([u, v, weight]);
            }
        });
    }
    
    return edges;
}

/**
 * Checks if a graph has an Eulerian path.
 * @param {Map<number, number[]>} adjList - The adjacency list.
 * @returns {boolean} - True if the graph has an Eulerian path, false otherwise.
 */
function hasEulerianPath(adjList) {
    let oddDegreeVertices = 0;
    adjList.forEach(neighbors => {
        if (neighbors.length % 2 !== 0) {
            oddDegreeVertices++;
        }
    });
    return oddDegreeVertices === 0 || oddDegreeVertices === 2;
}

/**
 * Checks if a graph has an Eulerian circuit.
 * @param {Map<number, number[]>} adjList - The adjacency list.
 * @returns {boolean} - True if the graph has an Eulerian circuit, false otherwise.
 */
function hasEulerianCircuit(adjList) {
    return [...adjList.values()].every(neighbors => neighbors.length % 2 === 0);
}

/**
 * Checks if a graph has a Hamiltonian path.
 * @param {Map<number, number[]>} adjList - The adjacency list.
 * @returns {boolean} - True if the graph has a Hamiltonian path, false otherwise.
 */
function hasHamiltonianPath(adjList) {
    // Hamiltonian Path problem is NP-complete; finding a solution is complex.
    // This is a placeholder function.
    throw new Error('Hamiltonian Path check is not implemented.');
}

/**
 * Performs topological sorting on a directed graph.
 * @param {Map<number, number[]>} adjList - The adjacency list.
 * @returns {number[]} - The topologically sorted vertices.
 */
function topologicalSort(adjList) {
    const visited = new Set();
    const stack = [];
    
    function visit(vertex) {
        if (!visited.has(vertex)) {
            visited.add(vertex);
            adjList.get(vertex).forEach(edge => visit(edge.vertex));
            stack.push(vertex);
        }
    }
    
    adjList.forEach((_, vertex) => visit(vertex));
    
    return stack.reverse();
}

// PriorityQueue class used in Dijkstra's and Prim's algorithms
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element, priority) {
        this.items.push({ element, priority });
        this.items.sort((a, b) => a.priority - b.priority);
    }
    
    dequeue() {
        return this.items.shift();
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = {
    createAdjacencyMatrix,
    addEdgeToMatrix,
    createAdjacencyList,
    addEdgeToList,
    bfs,
    dfs,
    dijkstra,
    bellmanFord,
    kruskal,
    prim,
    hasEulerianPath,
    hasEulerianCircuit,
    hasHamiltonianPath,
    topologicalSort
};
