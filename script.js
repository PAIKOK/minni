
const prepPlan = {
    weeks: [
        {
            title: "Week 1: DSA Foundations & Core CS Basics",
            days: [
                {
                    day: 1,
                    title: "Arrays Basics",
                    morning: [
                        { task: "Study array implementation, operations (insertion, deletion, searching)", description: "Review core array operations and implementations" },
                        { task: "Time and space complexity analysis of array operations", description: "Understand Big O notation for common array operations" },
                        { task: "Multi-dimensional arrays", description: "Learn about 2D arrays and matrix operations" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Find largest/second largest element in an array", description: "Implement algorithm to find these elements" },
                        { task: "Practice Problem: Array rotation (left and right)", description: "Implement efficient array rotation algorithms" },
                        { task: "Practice Problem: Find duplicates in an array", description: "Multiple approaches to find duplicates" },
                        { task: "Practice Problem: Check if array is sorted", description: "Write a function to verify if an array is sorted" }
                    ],
                    evening: [
                        { task: "OS Concepts: Introduction to OS, Types of OS", description: "Basic understanding of operating systems" },
                        { task: "Review day's learnings and prepare notes", description: "Consolidate knowledge and create summary notes" }
                    ]
                },
                {
                    day: 2,
                    title: "String Manipulation",
                    morning: [
                        { task: "String representation, common operations", description: "Understand string storage and basic operations" },
                        { task: "String manipulation algorithms (substring, concatenation)", description: "Efficient ways to manipulate strings" },
                        { task: "Pattern matching basics", description: "Introduction to pattern matching algorithms" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Reverse a string", description: "Implement string reversal (in-place if possible)" },
                        { task: "Practice Problem: Check if string is palindrome", description: "Write efficient palindrome checking algorithm" },
                        { task: "Practice Problem: String anagram check", description: "Determine if two strings are anagrams" },
                        { task: "Practice Problem: Count occurrences of characters", description: "Count frequency of each character in a string" }
                    ],
                    evening: [
                        { task: "OS Concepts: Process management basics", description: "Study process creation, termination, and states" },
                        { task: "Aptitude: Number system problems", description: "Practice problems on number systems" }
                    ]
                },
                {
                    day: 3,
                    title: "Advanced Arrays & Strings",
                    morning: [
                        { task: "Kadane's algorithm for maximum subarray", description: "Learn this important algorithm for maximum subarray sum" },
                        { task: "2D array traversal techniques (row-major, column-major)", description: "Understand efficient matrix traversal" },
                        { task: "Window sliding technique", description: "Learn this technique for array/string problems" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Maximum subarray sum", description: "Implement Kadane's algorithm" },
                        { task: "Practice Problem: Matrix operations (transpose, rotation)", description: "Implement matrix transformations" },
                        { task: "Practice Problem: Find all substrings of a string", description: "Generate all possible substrings" },
                        { task: "Practice Problem: Longest palindromic substring", description: "Find the longest palindrome in a string" }
                    ],
                    evening: [
                        { task: "OS Concepts: Process scheduling algorithms", description: "Study FCFS, SJF, Round Robin scheduling" },
                        { task: "LinkedIn profile optimization for tech roles", description: "Update profile with relevant skills and projects" }
                    ]
                },
                {
                    day: 4,
                    title: "Linked Lists Basics",
                    morning: [
                        { task: "Singly linked list implementation", description: "Understand the structure and basic implementation" },
                        { task: "Basic operations: traversal, insertion, deletion", description: "Implement core linked list operations" },
                        { task: "Memory representation", description: "Understand how linked lists are stored in memory" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Implement a linked list from scratch", description: "Build a fully functional linked list class" },
                        { task: "Practice Problem: Insert/delete node at beginning, middle, end", description: "Implement all insertion/deletion operations" },
                        { task: "Practice Problem: Search for an element", description: "Write a function to find elements in a linked list" },
                        { task: "Practice Problem: Print linked list in reverse", description: "Use recursion or stack to print reversed list" }
                    ],
                    evening: [
                        { task: "OS Concepts: CPU scheduling algorithms (FCFS, SJF)", description: "Detailed study of scheduling algorithms" },
                        { task: "Aptitude: Time and work problems", description: "Practice time and work problems" }
                    ]
                },
                {
                    day: 5,
                    title: "Advanced Linked Lists",
                    morning: [
                        { task: "Doubly linked list implementation", description: "Learn bidirectional linked lists" },
                        { task: "Circular linked list operations", description: "Understand circular linked list structure" },
                        { task: "Detecting and handling cycles", description: "Learn cycle detection algorithms" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Reverse a linked list (iterative and recursive)", description: "Implement both approaches" },
                        { task: "Practice Problem: Detect loop in linked list (Floyd's cycle detection)", description: "Implement fast/slow pointer technique" },
                        { task: "Practice Problem: Find middle element", description: "Use fast/slow pointer to find middle" },
                        { task: "Practice Problem: Merge two sorted linked lists", description: "Merge lists maintaining sorted order" }
                    ],
                    evening: [
                        { task: "OS Concepts: Deadlocks, prevention strategies", description: "Study deadlock conditions and prevention" },
                        { task: "Mock aptitude test - basic level", description: "Take practice test to identify weak areas" }
                    ]
                },
                {
                    day: 6,
                    title: "OS Deep Dive I",
                    morning: [
                        { task: "Process states and lifecycle", description: "Understand process state transitions" },
                        { task: "Process control blocks", description: "Learn PCB structure and purpose" },
                        { task: "Context switching", description: "Understand process context switching" },
                        { task: "Process creation (fork(), exec())", description: "Study process creation system calls" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: Array implementation questions for reinforcement", description: "Revise array concepts through practice" },
                        { task: "Practice Problems: Simple OS numerical problems", description: "Calculate turnaround time, waiting time, etc." }
                    ],
                    evening: [
                        { task: "Revision of Week 1 DSA concepts", description: "Review arrays, strings, linked lists" },
                        { task: "Create flashcards for OS terminology", description: "Make study aids for OS concepts" }
                    ]
                },
                {
                    day: 7,
                    title: "OS Deep Dive II",
                    morning: [
                        { task: "Memory management techniques", description: "Study memory allocation strategies" },
                        { task: "Paging and segmentation", description: "Understand memory segmentation concepts" },
                        { task: "Virtual memory concepts", description: "Learn about virtual memory and its benefits" },
                        { task: "Page replacement algorithms", description: "Study FIFO, LRU, optimal replacement" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: Linked list problems for reinforcement", description: "Revise linked list concepts through practice" },
                        { task: "Practice Problems: Memory management numerical problems", description: "Calculate page faults, etc." }
                    ],
                    evening: [
                        { task: "Week 1 revision", description: "Complete review of Week 1 material" },
                        { task: "Create a mind map of OS concepts", description: "Visual organization of OS topics" },
                        { task: "Plan Week 2 focus areas", description: "Identify strengths/weaknesses to prioritize" }
                    ]
                }
            ]
        },
        {
            title: "Week 2: Data Structures & DBMS",
            days: [
                {
                    day: 8,
                    title: "Stacks",
                    morning: [
                        { task: "Stack implementation (array and linked list based)", description: "Learn both implementation approaches" },
                        { task: "Applications of stacks", description: "Study common stack applications" },
                        { task: "Time complexity analysis", description: "Analyze time complexity of stack operations" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Implement stack with push, pop, isEmpty operations", description: "Build a complete stack class" },
                        { task: "Practice Problem: Balanced parentheses check", description: "Use stack to verify balanced brackets" },
                        { task: "Practice Problem: Infix to postfix conversion", description: "Convert expressions using stack" },
                        { task: "Practice Problem: Evaluate postfix expression", description: "Evaluate expressions using stack" }
                    ],
                    evening: [
                        { task: "DBMS Basics: Introduction, architecture, data models", description: "Learn database fundamentals" },
                        { task: "Daily revision of array and linked list concepts", description: "Quick review of previous topics" }
                    ]
                },
                {
                    day: 9,
                    title: "Queues",
                    morning: [
                        { task: "Queue implementation (array and linked list based)", description: "Understand queue implementations" },
                        { task: "Circular queue, priority queue", description: "Learn specialized queue types" },
                        { task: "Applications of queues", description: "Study real-world queue applications" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Implement queue with enqueue, dequeue operations", description: "Build a queue class" },
                        { task: "Practice Problem: Implement circular queue", description: "Handle wrap-around conditions" },
                        { task: "Practice Problem: Generate binary numbers from 1 to n using queue", description: "Use queue to generate binary numbers" },
                        { task: "Practice Problem: Implement stack using queues", description: "Solve using two queues" }
                    ],
                    evening: [
                        { task: "DBMS: Entity-Relationship model, database design", description: "Study ER diagrams and relationships" },
                        { task: "Aptitude: Percentages and ratios", description: "Practice percentage problems" }
                    ]
                },
                {
                    day: 10,
                    title: "Binary Trees",
                    morning: [
                        { task: "Binary tree implementation", description: "Understand tree node structure" },
                        { task: "Tree traversals (inorder, preorder, postorder)", description: "Learn recursive and iterative approaches" },
                        { task: "Basic operations (insertion, search)", description: "Implement tree operations" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Implement binary tree with basic operations", description: "Create tree class with methods" },
                        { task: "Practice Problem: Height of binary tree", description: "Calculate tree height" },
                        { task: "Practice Problem: Count leaf nodes", description: "Traverse and count leaves" },
                        { task: "Practice Problem: Check if two trees are identical", description: "Compare tree structures" }
                    ],
                    evening: [
                        { task: "DBMS: Normalization (1NF, 2NF, 3NF, BCNF)", description: "Study normalization rules" },
                        { task: "Verbal ability practice - synonyms and antonyms", description: "Build vocabulary" }
                    ]
                },
                {
                    day: 11,
                    title: "Binary Search Trees & Graphs",
                    morning: [
                        { task: "BST properties and implementation", description: "Understand BST rules" },
                        { task: "Graph representation (adjacency matrix, adjacency list)", description: "Learn graph storage methods" },
                        { task: "Graph terminology", description: "Study graph concepts" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: BST insertion and deletion", description: "Implement BST operations" },
                        { task: "Practice Problem: Find min/max in BST", description: "Traverse BST" },
                        { task: "Practice Problem: Implement graph using adjacency list", description: "Create graph class" },
                        { task: "Practice Problem: Graph adjacency matrix to adjacency list conversion", description: "Convert between representations" }
                    ],
                    evening: [
                        { task: "DBMS: SQL basics (DDL, DML commands)", description: "Study SQL fundamentals" },
                        { task: "Revise stack and queue concepts", description: "Review previous topics" }
                    ]
                },
                {
                    day: 12,
                    title: "Graph Traversals",
                    morning: [
                        { task: "Breadth-First Search (BFS) algorithm", description: "Learn queue-based traversal" },
                        { task: "Depth-First Search (DFS) algorithm", description: "Understand stack-based traversal" },
                        { task: "Applications of graph traversals", description: "Study real-world uses" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Implement BFS and DFS", description: "Code both traversals" },
                        { task: "Practice Problem: Find path between two vertices", description: "Use traversal algorithms" },
                        { task: "Practice Problem: Count connected components", description: "Identify disconnected graphs" },
                        { task: "Practice Problem: Detect cycle in undirected graph", description: "Modify traversal for cycle detection" }
                    ],
                    evening: [
                        { task: "DBMS: Complex SQL queries, joins", description: "Practice advanced SQL" },
                        { task: "Logical reasoning practice - sequences and patterns", description: "Solve pattern problems" }
                    ]
                },
                {
                    day: 13,
                    title: "DBMS Deep Dive I",
                    morning: [
                        { task: "ER diagrams comprehensive study", description: "Master ER diagram components" },
                        { task: "Mapping ER diagrams to tables", description: "Convert conceptual to logical model" },
                        { task: "Relational algebra operations", description: "Study database operations" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: Tree traversal problems for reinforcement", description: "Revise tree concepts" },
                        { task: "Practice Problems: SQL query exercises (SELECT, WHERE, GROUP BY)", description: "Write complex queries" },
                        { task: "Practice Problems: Database design case studies", description: "Design schemas for scenarios" }
                    ],
                    evening: [
                        { task: "Revise graph concepts", description: "Review graph theory" },
                        { task: "Create cheat sheets for SQL commands", description: "Make quick reference notes" }
                    ]
                },
                {
                    day: 14,
                    title: "DBMS Deep Dive II",
                    morning: [
                        { task: "Transactions and ACID properties", description: "Study transaction characteristics" },
                        { task: "Concurrency control mechanisms", description: "Learn about locking" },
                        { task: "Deadlock handling in DBMS", description: "Understand deadlock prevention" },
                        { task: "Indexing concepts", description: "Study B-trees and hashing" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: Graph problems for reinforcement", description: "Solve more graph questions" },
                        { task: "Practice Problems: Transaction scenario exercises", description: "Analyze transaction schedules" },
                        { task: "Practice Problems: Advanced SQL queries (subqueries, functions)", description: "Write nested queries" }
                    ],
                    evening: [
                        { task: "Week 2 revision", description: "Review all week 2 topics" },
                        { task: "Mock SQL test", description: "Test your DBMS knowledge" },
                        { task: "Plan Week 3 focus areas", description: "Identify strengths/weaknesses" }
                    ]
                }
            ]
        },
        {
            title: "Week 3: Advanced DSA & Computer Networks",
            days: [
                {
                    day: 15,
                    title: "Dynamic Programming Basics",
                    morning: [
                        { task: "Introduction to DP approach", description: "Understand DP methodology" },
                        { task: "Memoization vs. Tabulation", description: "Compare top-down and bottom-up" },
                        { task: "Top-down vs. Bottom-up approach", description: "Learn both DP strategies" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Fibonacci series using DP", description: "Implement with memoization" },
                        { task: "Practice Problem: Climbing stairs problem", description: "Solve with DP" },
                        { task: "Practice Problem: Count ways to reach nth stair", description: "Variation of stairs problem" },
                        { task: "Practice Problem: Coin change problem (basic)", description: "Solve minimum coins problem" }
                    ],
                    evening: [
                        { task: "Computer Networks: OSI model layers", description: "Study 7-layer model" },
                        { task: "Prepare notes on DP approach and methodology", description: "Summarize DP concepts" }
                    ]
                },
                {
                    day: 16,
                    title: "Classic DP Problems",
                    morning: [
                        { task: "0/1 Knapsack problem", description: "Understand the classic DP problem" },
                        { task: "Longest Common Subsequence", description: "Learn string comparison with DP" },
                        { task: "Matrix Chain Multiplication", description: "Study optimal parenthesization" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: 0/1 Knapsack implementation", description: "Code the solution" },
                        { task: "Practice Problem: Subset sum problem", description: "DP approach to subset sum" },
                        { task: "Practice Problem: Longest increasing subsequence", description: "Find LIS length" },
                        { task: "Practice Problem: Edit distance", description: "Implement string edit operations" }
                    ],
                    evening: [
                        { task: "Computer Networks: TCP/IP model", description: "Compare with OSI model" },
                        { task: "Aptitude: Probability problems", description: "Solve probability questions" }
                    ]
                },
                {
                    day: 17,
                    title: "Advanced DP Problems",
                    morning: [
                        { task: "DP on trees and graphs", description: "Apply DP to tree structures" },
                        { task: "State machine approach in DP", description: "Learn state transitions" },
                        { task: "Bitmask DP introduction", description: "Understand bitmask techniques" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Longest path in directed acyclic graph", description: "Use DP on DAG" },
                        { task: "Practice Problem: Minimum cost path in matrix", description: "Find optimal path" },
                        { task: "Practice Problem: Maximum sum increasing subsequence", description: "Variation of LIS" },
                        { task: "Practice Problem: Partition equal subset sum", description: "DP approach to partitioning" }
                    ],
                    evening: [
                        { task: "Computer Networks: Data link layer protocols", description: "Study MAC protocols" },
                        { task: "Revise previous DP problems", description: "Review classic DP solutions" }
                    ]
                },
                {
                    day: 18,
                    title: "Sorting Algorithms",
                    morning: [
                        { task: "Bubble sort, Selection sort, Insertion sort", description: "Understand O(n^2) sorts" },
                        { task: "Merge sort, Quick sort algorithms", description: "Master divide and conquer sorts" },
                        { task: "Time/space complexity analysis and comparison", description: "Analyze sorting algorithms" }
                    ],
                    afternoon: [
                        { task: "Practice Implementations: Code all sorting algorithms from scratch", description: "Implement each sort" },
                        { task: "Practice Problem: Custom sort scenarios (sort by multiple criteria)", description: "Write comparator functions" },
                        { task: "Practice Problem: Stability in sorting algorithms", description: "Identify stable sorts" }
                    ],
                    evening: [
                        { task: "Computer Networks: IP addressing, subnetting", description: "Study IPv4 addressing" },
                        { task: "Verbal ability practice - reading comprehension", description: "Practice passage reading" }
                    ]
                },
                {
                    day: 19,
                    title: "Searching Algorithms & Divide and Conquer",
                    morning: [
                        { task: "Linear search vs. Binary search", description: "Compare search strategies" },
                        { task: "Binary search variations", description: "Learn modified binary search" },
                        { task: "Divide and conquer paradigm", description: "Understand D&C approach" }
                    ],
                    afternoon: [
                        { task: "Practice Problem: Binary search on sorted array", description: "Implement standard binary search" },
                        { task: "Practice Problem: Search in rotated sorted array", description: "Modified binary search" },
                        { task: "Practice Problem: Find first and last occurrence", description: "Binary search variations" },
                        { task: "Practice Problem: Peak element in array", description: "Find local maxima" }
                    ],
                    evening: [
                        { task: "Computer Networks: Transport layer protocols (TCP/UDP)", description: "Compare TCP and UDP" },
                        { task: "Logical reasoning practice - logical deductions", description: "Solve deduction puzzles" }
                    ]
                },
                {
                    day: 20,
                    title: "Computer Networks Deep Dive I",
                    morning: [
                        { task: "Physical and data link layers in depth", description: "Study lower OSI layers" },
                        { task: "MAC protocols, CSMA/CD", description: "Understand media access control" },
                        { task: "Error detection and correction", description: "Learn checksums and CRCs" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: Sorting algorithm implementations for reinforcement", description: "Reimplement sorts" },
                        { task: "Practice Problems: Network layer numerical problems (checksum calculations)", description: "Solve network calculations" }
                    ],
                    evening: [
                        { task: "Revise DP concepts", description: "Review dynamic programming" },
                        { task: "Create network protocols comparison chart", description: "Visualize protocol differences" }
                    ]
                },
                {
                    day: 21,
                    title: "Computer Networks Deep Dive II",
                    morning: [
                        { task: "Network layer routing algorithms", description: "Study routing strategies" },
                        { task: "Transport layer flow control, congestion control", description: "Understand TCP mechanisms" },
                        { task: "Application layer protocols (HTTP, FTP, SMTP)", description: "Learn common protocols" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: Searching algorithm implementations for reinforcement", description: "Reimplement searches" },
                        { task: "Practice Problems: Subnetting exercises", description: "Calculate subnets" },
                        { task: "Practice Problems: Routing algorithm simulations", description: "Trace routing paths" }
                    ],
                    evening: [
                        { task: "Week 3 revision", description: "Review all week 3 topics" },
                        { task: "Create mind map of networking concepts", description: "Visual organization of topics" },
                        { task: "Plan Week 4 focus areas", description: "Identify strengths/weaknesses" }
                    ]
                }
            ]
        },
        {
            title: "Week 4: OOP, Aptitude & Interview Prep",
            days: [
                {
                    day: 22,
                    title: "OOP Fundamentals",
                    morning: [
                        { task: "Classes and objects", description: "Understand OOP building blocks" },
                        { task: "Encapsulation, inheritance concepts", description: "Study OOP pillars" },
                        { task: "Method overloading and overriding", description: "Learn polymorphism" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: Implement classes with inheritance", description: "Create class hierarchies" },
                        { task: "Practice Problem: Method overriding demonstrations", description: "Override parent methods" },
                        { task: "Practice Problem: Access specifiers scenarios", description: "Test visibility modifiers" }
                    ],
                    evening: [
                        { task: "Aptitude: Time, speed, and distance problems", description: "Solve motion problems" },
                        { task: "Daily revision of DSA concepts", description: "Review key algorithms" }
                    ]
                },
                {
                    day: 23,
                    title: "Advanced OOP & Design Patterns",
                    morning: [
                        { task: "Abstract classes and interfaces", description: "Understand abstraction" },
                        { task: "Polymorphism in depth", description: "Study runtime polymorphism" },
                        { task: "Introduction to design patterns (Singleton, Factory, Observer)", description: "Learn common patterns" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: Implement abstract classes and interfaces", description: "Create abstract types" },
                        { task: "Practice Problem: Create simple design pattern implementations", description: "Code patterns" },
                        { task: "Practice Problem: Solve inheritance hierarchy problems", description: "Design class diagrams" }
                    ],
                    evening: [
                        { task: "Aptitude: Profit and loss problems", description: "Solve business math" },
                        { task: "Mock test on core CS subjects", description: "Take practice test" }
                    ]
                },
                {
                    day: 24,
                    title: "Quantitative Aptitude",
                    morning: [
                        { task: "Percentages, ratios, averages", description: "Review basic math concepts" },
                        { task: "Time and work problems", description: "Solve work rate problems" },
                        { task: "Profit, loss, and discount", description: "Practice business math" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: Solve 25-30 questions on quantitative aptitude", description: "Timed practice" },
                        { task: "Practice Problem: Time-based mock test", description: "Simulate test conditions" }
                    ],
                    evening: [
                        { task: "Revision of OOP concepts", description: "Review object-oriented programming" },
                        { task: "Create formula sheet for quick reference", description: "Make math cheat sheet" }
                    ]
                },
                {
                    day: 25,
                    title: "Logical Reasoning",
                    morning: [
                        { task: "Analogy and classification", description: "Solve analogy problems" },
                        { task: "Coding and decoding", description: "Practice cipher problems" },
                        { task: "Blood relations and directions", description: "Solve spatial reasoning" },
                        { task: "Syllogisms", description: "Practice logical deductions" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: Solve 20-25 reasoning puzzles", description: "Timed practice" },
                        { task: "Practice Problem: Series completion problems", description: "Find patterns" },
                        { task: "Practice Problem: Logical deduction questions", description: "Solve logic puzzles" }
                    ],
                    evening: [
                        { task: "Technical concepts revision", description: "Review core CS topics" },
                        { task: "Practice previous companies' reasoning questions", description: "Solve past questions" }
                    ]
                },
                {
                    day: 26,
                    title: "Verbal Ability",
                    morning: [
                        { task: "Reading comprehension techniques", description: "Learn passage strategies" },
                        { task: "Grammar rules review", description: "Study English grammar" },
                        { task: "Vocabulary enhancement", description: "Learn new words" },
                        { task: "Sentence correction", description: "Practice error spotting" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: 3-4 comprehension passages", description: "Timed reading" },
                        { task: "Practice Problem: Fill in the blanks exercises", description: "Complete sentences" },
                        { task: "Practice Problem: Error correction problems", description: "Fix grammar mistakes" },
                        { task: "Practice Problem: Vocabulary-based questions", description: "Test word knowledge" }
                    ],
                    evening: [
                        { task: "Complete mock aptitude test (all three sections)", description: "Full-length practice" },
                        { task: "Identify weak areas for last-minute focus", description: "Analyze performance" }
                    ]
                },
                {
                    day: 27,
                    title: "GRE/GMAT Verbal & IELTS Vocabulary",
                    morning: [
                        { task: "GRE/GMAT verbal reasoning strategies", description: "Learn test tactics" },
                        { task: "Critical reasoning techniques", description: "Analyze arguments" },
                        { task: "Text completion and sentence equivalence", description: "Practice advanced vocab" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: 2-3 GRE/GMAT style reading passages", description: "Timed practice" },
                        { task: "Practice Problem: 20-25 vocabulary questions", description: "Test advanced words" },
                        { task: "Practice Problem: IELTS reading practice test", description: "Complete reading section" }
                    ],
                    evening: [
                        { task: "Review high-frequency GRE/GMAT words", description: "Memorize key vocabulary" },
                        { task: "Practice IELTS speaking topics", description: "Record responses" }
                    ]
                },
                {
                    day: 28,
                    title: "Quantitative Aptitude (GRE/GMAT) & Analytical Writing",
                    morning: [
                        { task: "GRE/GMAT math strategies", description: "Learn quantitative approaches" },
                        { task: "Data sufficiency approach (GMAT)", description: "Understand DS format" },
                        { task: "Analytical writing structure and techniques", description: "Study essay writing" }
                    ],
                    afternoon: [
                        { task: "Practice Problems: 25-30 GRE/GMAT quantitative problems", description: "Timed math practice" },
                        { task: "Practice Problem: 1 analytical writing essay (timed)", description: "Write practice essay" },
                        { task: "Practice Problem: IELTS writing task practice", description: "Complete writing section" }
                    ],
                    evening: [
                        { task: "Review formulas and shortcuts", description: "Memorize math formulas" },
                        { task: "Analyze sample high-scoring essays", description: "Study model answers" }
                    ]
                },
                {
                    day: 29,
                    title: "Technical Interview Preparation",
                    morning: [
                        { task: "Review of key DSA concepts", description: "Revise important algorithms" },
                        { task: "System design basics", description: "Study scalable system principles" },
                        { task: "Technical communication tips", description: "Learn to explain clearly" }
                    ],
                    afternoon: [
                        { task: "Mock technical interviews (with friend/online platform)", description: "Practice with feedback" },
                        { task: "Practice Problem: Code a medium-level problem on whiteboard/paper", description: "Simulate interview" },
                        { task: "Practice Problem: Explain your approach out loud", description: "Verbalize thinking" }
                    ],
                    evening: [
                        { task: "Review common technical questions", description: "Prepare for FAQs" },
                        { task: "Prepare questions to ask interviewers", description: "Research company-specific questions" }
                    ]
                },
                {
                    day: 30,
                    title: "HR Interview & Final Preparation",
                    morning: [
                        { task: "HR interview question preparation", description: "Practice behavioral questions" },
                        { task: "Resume walkthrough practice", description: "Prepare to discuss resume" },
                        { task: "Company research strategies", description: "Study target companies" }
                    ],
                    afternoon: [
                        { task: "Mock HR interview with feedback", description: "Practice with peer" },
                        { task: "Final revision of technical weak areas", description: "Targeted review" },
                        { task: "Preparation of 'tell me about yourself' pitch", description: "Craft elevator pitch" }
                    ],
                    evening: [
                        { task: "Relaxation techniques for interview anxiety", description: "Practice calming methods" },
                        { task: "Outfit preparation and logistics planning", description: "Prepare for interview day" }
                    ]
                }
            ]
        }
    ]
};




// DOM elements
const dateSelect = document.getElementById('date-select');
const weekButtons = document.querySelectorAll('.week-btn');
const dayPercentage = document.getElementById('day-percentage');
const tasksCompleted = document.getElementById('tasks-completed');
const tasksRemaining = document.getElementById('tasks-remaining');
const dailyNotes = document.getElementById('daily-notes');
const saveNotesBtn = document.getElementById('save-notes');
const currentDayTitle = document.getElementById('current-day-title');
const morningTasks = document.getElementById('morning-tasks');
const afternoonTasks = document.getElementById('afternoon-tasks');
const eveningTasks = document.getElementById('evening-tasks');
const weekProgress = document.getElementById('week-progress');
const currentDaySpan = document.getElementById('current-day');
const overallPercentage = document.getElementById('overall-percentage');
const resetProgressBtn = document.getElementById('reset-progress');
const exportDataBtn = document.getElementById('export-data');
const importDataInput = document.getElementById('import-data');

// Current state
let currentDay = 1;
let currentWeek = 1;
let userData = loadUserData();

// Initialize the app
function initApp() {
    populateDateSelector();
    updateWeeklyOverview();
    loadCurrentDay(currentDay);

    // Event listeners
    dateSelect.addEventListener('change', function () {
        currentDay = parseInt(this.value);
        loadCurrentDay(currentDay);
        saveUserData();
    });

    weekButtons.forEach(button => {
        button.addEventListener('click', function () {
            currentWeek = parseInt(this.dataset.week);

            // Update active button
            weekButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            updateWeeklyOverview();

            // Load first day of selected week
            const firstDayOfWeek = (currentWeek - 1) * 7 + 1;
            currentDay = firstDayOfWeek;
            dateSelect.value = currentDay;
            loadCurrentDay(currentDay);

            saveUserData();
        });
    });

    saveNotesBtn.addEventListener('click', function () {
        saveNotes();
    });

    // Add data management button event listeners
    resetProgressBtn.addEventListener('click', resetProgress);
    exportDataBtn.addEventListener('click', exportData);
    importDataInput.addEventListener('change', function (event) {
        if (event.target.files.length > 0) {
            importData(event.target.files[0]);
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function (e) {
        // Previous day: Left arrow
        if (e.key === 'ArrowLeft') {
            if (currentDay > 1) {
                currentDay--;
                dateSelect.value = currentDay;
                loadCurrentDay(currentDay);
                saveUserData();
            }
        }

        // Next day: Right arrow
        if (e.key === 'ArrowRight') {
            if (currentDay < 30) {
                currentDay++;
                dateSelect.value = currentDay;
                loadCurrentDay(currentDay);
                saveUserData();
            }
        }
    });
}

// Populate the date selector dropdown
function populateDateSelector() {
    for (let i = 1; i <= 30; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Day ${i}`;
        dateSelect.appendChild(option);
    }
    dateSelect.value = currentDay;
}

// Find the day data based on day number
function findDayData(dayNumber) {
    for (const week of prepPlan.weeks) {
        for (const day of week.days) {
            if (day.day === dayNumber) {
                return day;
            }
        }
    }
    return null;
}

// Load the selected day's content
function loadCurrentDay(dayNumber) {
    const dayData = findDayData(dayNumber);
    if (!dayData) {
        console.error(`Day ${dayNumber} data not found!`);
        return;
    }

    // Update UI elements
    currentDaySpan.textContent = dayNumber;
    currentDayTitle.textContent = `Day ${dayNumber}: ${dayData.title}`;

    // Load tasks
    loadTasks(morningTasks, dayData.morning, 'morning');
    loadTasks(afternoonTasks, dayData.afternoon, 'afternoon');
    loadTasks(eveningTasks, dayData.evening, 'evening');

    // Load notes
    loadNotes();

    // Update progress indicators
    updateDailyProgress();
    updateOverallProgress();
}

// Load tasks into the UI
function loadTasks(container, tasks, timeOfDay) {
    container.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskKey = `day-${currentDay}-${timeOfDay}-${index}`;
        const isCompleted = userData.completedTasks.includes(taskKey);

        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${isCompleted ? 'completed' : ''}`;
        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox" id="${taskKey}" ${isCompleted ? 'checked' : ''}>
            <div class="task-content">
                <div class="task-label">${task.task}</div>
                <div class="task-description">${task.description}</div>
            </div>
        `;

        container.appendChild(taskItem);

        // Add event listener to checkbox
        const checkbox = taskItem.querySelector(`#${taskKey}`);
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                taskItem.classList.add('completed');
                if (!userData.completedTasks.includes(taskKey)) {
                    userData.completedTasks.push(taskKey);
                }
            } else {
                taskItem.classList.remove('completed');
                userData.completedTasks = userData.completedTasks.filter(t => t !== taskKey);
            }

            updateDailyProgress();
            updateOverallProgress();
            updateWeeklyOverview();
            saveUserData();
        });
    });
}

// Load notes for the current day
function loadNotes() {
    dailyNotes.value = userData.notes[`day-${currentDay}`] || '';
}

// Save notes for the current day
function saveNotes() {
    userData.notes[`day-${currentDay}`] = dailyNotes.value;
    saveUserData();

    // Show save confirmation
    saveNotesBtn.textContent = 'Saved!';
    setTimeout(() => {
        saveNotesBtn.textContent = 'Save Notes';
    }, 2000);
}

// Update daily progress indicators
function updateDailyProgress() {
    const dayData = findDayData(currentDay);
    if (!dayData) return;

    const totalTasks = dayData.morning.length + dayData.afternoon.length + dayData.evening.length;
    let completedCount = 0;

    // Count completed tasks for the current day
    ['morning', 'afternoon', 'evening'].forEach((timeOfDay) => {
        dayData[timeOfDay].forEach((_, taskIndex) => {
            const taskKey = `day-${currentDay}-${timeOfDay}-${taskIndex}`;
            if (userData.completedTasks.includes(taskKey)) {
                completedCount++;
            }
        });
    });

    // Update UI
    const percentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
    dayPercentage.textContent = `${percentage}%`;
    tasksCompleted.textContent = completedCount;
    tasksRemaining.textContent = totalTasks - completedCount;

    // Update progress circle
    document.querySelector('.progress-circle').style.background =
        `conic-gradient(var(--primary) ${percentage}%, var(--light) 0%)`;
}

// Update the overall progress across all days
function updateOverallProgress() {
    let totalTasks = 0;
    let completedTasks = 0;

    // Count all tasks across all available days
    prepPlan.weeks.forEach(week => {
        week.days.forEach(day => {
            const dayTotalTasks = day.morning.length + day.afternoon.length + day.evening.length;
            totalTasks += dayTotalTasks;

            // Count completed tasks for this day
            ['morning', 'afternoon', 'evening'].forEach(timeOfDay => {
                day[timeOfDay].forEach((_, taskIndex) => {
                    const taskKey = `day-${day.day}-${timeOfDay}-${taskIndex}`;
                    if (userData.completedTasks.includes(taskKey)) {
                        completedTasks++;
                    }
                });
            });
        });
    });

    // Update overall progress percentage
    const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    overallPercentage.textContent = `${percentage}%`;
}

// Update the weekly overview section
function updateWeeklyOverview() {
    weekProgress.innerHTML = '';

    // Find the week data
    const weekData = prepPlan.weeks.find(week => week.title.includes(`Week ${currentWeek}`));
    if (!weekData) return;

    // Create day cards for the week
    weekData.days.forEach(day => {
        const totalTasks = day.morning.length + day.afternoon.length + day.evening.length;
        let completedCount = 0;

        // Count completed tasks for this day
        ['morning', 'afternoon', 'evening'].forEach(timeOfDay => {
            day[timeOfDay].forEach((_, taskIndex) => {
                const taskKey = `day-${day.day}-${timeOfDay}-${taskIndex}`;
                if (userData.completedTasks.includes(taskKey)) {
                    completedCount++;
                }
            });
        });

        const percentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

        // Determine card status
        let cardClass = '';
        if (day.day === currentDay) {
            cardClass = 'active';
        } else if (percentage === 100) {
            cardClass = 'completed';
        } else if (percentage > 0) {
            cardClass = 'in-progress';
        }

        // Create day card
        const dayCard = document.createElement('div');
        dayCard.className = `day-card ${cardClass}`;
        dayCard.innerHTML = `
            <div class="day-number">Day ${day.day}</div>
            <div class="day-title">${day.title}</div>
            <div class="day-progress">
                <div class="day-progress-bar" style="width: ${percentage}%"></div>
            </div>
            <div class="day-percentage">${percentage}%</div>
        `;

        // Add click event to navigate to this day
        dayCard.addEventListener('click', () => {
            currentDay = day.day;
            dateSelect.value = currentDay;
            loadCurrentDay(currentDay);
            saveUserData();
        });

        weekProgress.appendChild(dayCard);
    });
}

// Load user data from localStorage
function loadUserData() {
    const savedData = localStorage.getItem('placementPrepData');

    if (savedData) {
        return JSON.parse(savedData);
    } else {
        // Default data structure
        return {
            completedTasks: [],
            notes: {},
            currentDay: 1,
            currentWeek: 1
        };
    }
}

// Save user data to localStorage
function saveUserData() {
    // Update current state in userData
    userData.currentDay = currentDay;
    userData.currentWeek = currentWeek;

    localStorage.setItem('placementPrepData', JSON.stringify(userData));
}

// Reset all progress data
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        userData = {
            completedTasks: [],
            notes: {},
            currentDay: 1,
            currentWeek: 1
        };

        currentDay = 1;
        currentWeek = 1;

        saveUserData();

        // Reset UI
        weekButtons.forEach(btn => btn.classList.remove('active'));
        weekButtons[0].classList.add('active');

        initApp();
    }
}

// Export progress data
function exportData() {
    const dataStr = JSON.stringify(userData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = 'placement-prep-progress.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Import progress data
function importData(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const importedData = JSON.parse(e.target.result);

            // Validate imported data structure
            if (importedData.completedTasks && importedData.notes) {
                userData = importedData;
                currentDay = userData.currentDay || 1;
                currentWeek = userData.currentWeek || 1;

                saveUserData();

                // Update UI
                weekButtons.forEach(btn => btn.classList.remove('active'));
                const weekBtn = document.querySelector(`.week-btn[data-week="${currentWeek}"]`);
                if (weekBtn) weekBtn.classList.add('active');

                initApp();

                alert('Data imported successfully!');
            } else {
                alert('Invalid data structure in the imported file.');
            }
        } catch (error) {
            alert('Error importing data: ' + error.message);
        }
    };

    reader.readAsText(file);
}

// Start the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);