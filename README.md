JavaScript Algorithms and Data Structures

Problem Solving Patterns:

1.Frequency Counter Pattern:

This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

2.Multiple Pointers:

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
Very efficient for solving problems with minimal space complexity as well

3.Sliding Window

This pattern involves creating a window which can either be an array or number from one position to another
Depending on a certain condition, the window either increases or closes (and a new window is created)
Very useful for keeping track of a subset of data in an array/string etc.

4.Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
This pattern can tremendously decrease time complexity

Sorting Algorithms:

1. Bubble Sort

Largest elements bubbles up to the last.
Swaps at every step

2. Selection Sort

We select the minimum in whole array and put it in the first.
we compare and only make one swap at end of each loop

3. Insertion Sort

We insert the elements to the sorted left portion

4. Merge Sort

First we divide the array to the individual elements and then merge them back

Data Structures:

1. Singly Linked List

Big O ->

- Insertion : O(1)
- Removal : O(1) -> Begining or O(n) -> End
- Searching : O(n)
- Access : O(n)

2. Doubly Linked List

Big O ->

- Insertion : O(1)
- Removal : O(1)
- Searching : O(n) Technically O(n/2) but that's still O(n)
- Access : O(n)

3. Stack ->

- Using Arrays: Better to use push/pop as unshift/shift will cause re-indexing.

- Using Linked List: Better to use unshift/shift as pop in linked list in O(n)

Big O ->

- Insertion : O(1)
- Removal : O(1)
- Searching : O(n)
- Access : O(n)

4. Queue ->

- Using Arrays: Have to reindex on both unshift/pop and push/shift, so linked list is preferred.

- Using Linked List: Better to Remove from begining (shift) and add to end(push)

Big O ->

- Insertion : O(1)
- Removal : O(1)
- Searching : O(n)
- Access : O(n)

5. Tree ->

- Binary Tree ->

  - Each node can have at most two children

    - Binary Search Tree (BST) ->
      - Sorted in a particular way(order)
        Like :
      - Every item on left of root is less than root
      - Every item on right of root is greater than root
      - Can repeat that on each child node

6. Tree Traversal ->

   - BFS
   - DFS

     - PreOrder: visit parent -> left side of parent -> right side (can be used if we are trying to duplicate/clone a tree as its easily reconstructed).
     - PostOrder: visit left side -> right side -> parent node.
     - InOrder: visit left -> parent -> right side of parent (used commonly in bst as we can get nodes values in ascending order).

   - BFS vs DFS ->
     - Depends on Tree
       - Generally, time complexity remains same in both case, as each node is visited once.
       - If tree is wide (lot of nodes), then DFS is preferred, as space we take up in process will be less in DFS.
       - If tree is one sided (like each node on right or left side), then BFS is preferred, as space taken will be less and depth will be more.

7. Binary Heaps ->

   - Another Category of Trees
   - Each node can have at most 2 children
   - The left child comes before the right child
     - Max Binary Heap : Like BST but parent nodes > child nodes.
     - Min Binary Heap : Like BST but parent nodes < child nodes.
     - Find parent of a child node -> (n-1)/2
     - Find left and right child of parent node -> 2n+1, 2n+2
     - Remove : In case of max BH, maximum node is removed, and in min BH, min node is removed.
   - Used to implement Priorty Queues
     - Priorty Queue -> A data strcture where each element has a priorty. Elements with higher priorty are    served before elements with lower priorty.
     - Ex.: Processes running in an operating system.

   - Big O of Binary Heaps:
    - Insertion -> O(log N)
    - Removal -> O(log N)
    - Search -> O(N)

8. Hash Tables/ Hash Map -> 

  - Built-in in as a default type in every programming language(like array).
  - Use to store key-value pairs(keys are not ordered and not strictly numeric).
  - Fast for all of following : 
    - Finding values
    - Adding new values
    - Removing values

  - Js have Object(same idea but keys are only strings) and Maps.
  - Hash Functions ->
    - Convert keys into valid arrayIndices/someNumber.
    - Used in Cryptography.
  
  - The Hash table length -> its good to always make it prime(decreases number of collisions).
    - Hash Collision is a random match in hash values that occurs when a hashing algorithm produces the same hash value for two distinct pieces of data
      - Strategies to avoid collision ->
        - Separate Chaining -> We store the pieces of data at same spot using another nested data structure.
        - Linear Probing -> We serch thorugh array to find next empty slot and store there.

   - Big O of Hash Tables(Depends on Hash Function) :
    - Insertion -> O(1)
    - Deletion -> O(1)
    - Access -> O(1)

9. Graphs ->
    - Graph is a collection of nodes and connection between those nodes( Nodes + Connections ).
    - Uses : 
      - Social Networks
      - Location/Mapping
      - Routing Algorithms
      - Recommendations(Youtube, Facebook, etc.)
    
    - Can use following to represent edges and vertices in graph->
      - Adjacency Matrix (Better to use if there is a lot of connections)
      - Adjacency List (Better to use if data is sparser i.e. less connections)

10. Graph Traversal ->
  - Graph Traversal Uses ->
    - Web crawlers
    - Finding closest (Recommendations)
    - Shortest path problems
      - GPS Navigation
      - Solving puzzles
      - AI (shortest path to win the game)

  - Two ways to traverse Graphs ->
    - Depth First Graph Traversal
    - Breadth First Graph Traversal
    - Both can be done recursively or iteratively.

11. Dijkstra's Algorithm
    - Acts upon a graph
    - Uses priority queue
    - Find Shortest path between two vertices on a graph
    - Uses:
      - GPS - finding fastest route
      - Network Routing - finds open shortest path for data
      - Biology - used to model the spread of viruses among humans
      - Airline tickets - finding cheapest route to destination, etc.