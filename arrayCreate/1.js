În JavaScript, există mai multe moduri de a crea un array.Iată cele mai comune metode:

1. Utilizarea literalei de array(cea mai comună metodă):
javascript
Copy
let arr = [1, 2, 3, 4, 5];
2. Utilizarea constructorului Array:
javascript
Copy
let arr = new Array(1, 2, 3, 4, 5);
3. Crearea unui array gol și adăugarea elementelor ulterior:
javascript
Copy
let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
4. Crearea unui array cu o lungime specifică(elementele vor fi undefined):
javascript
Copy
let arr = new Array(5); // Creează un array cu 5 elemente, toate fiind `undefined`
5. Utilizarea metodei Array.from():
Această metodă poate crea un array dintr - un obiect iterabil sau array - like(de exemplu, un NodeList sau un String).

    javascript
Copy
let arr = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
6. Utilizarea metodei Array.of():
Această metodă creează un array cu elementele specificate, indiferent de numărul sau tipul lor.

    javascript
Copy
let arr = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
7. Crearea unui array folosind map pe un array existent:
javascript
Copy
let arr = [1, 2, 3].map(x => x * 2); // [2, 4, 6]
8. Crearea unui array folosind filter pe un array existent:
javascript
Copy
let arr = [1, 2, 3, 4, 5].filter(x => x > 2); // [3, 4, 5]
9. Crearea unui array folosind reduce pe un array existent:
javascript
Copy
let arr = [1, 2, 3].reduce((acc, curr) => acc.concat(curr * 2), []); // [2, 4, 6]
10. Crearea unui array folosind split pe un string:
javascript
Copy
let arr = '1,2,3,4,5'.split(','); // ['1', '2', '3', '4', '5']
11. Crearea unui array folosind Array.prototype.fill():
javascript
Copy
let arr = new Array(5).fill(0); // [0, 0, 0, 0, 0]
12. Crearea unui array folosind Array.prototype.concat():
javascript
Copy
let arr = [].concat([1, 2, 3], [4, 5]); // [1, 2, 3, 4, 5]
13. Crearea unui array folosind Array.prototype.slice():
javascript
Copy
let arr = [1, 2, 3, 4, 5].slice(0, 3); // [1, 2, 3]
14. Crearea unui array folosind Array.prototype.splice():
javascript
Copy
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5]
15. Crearea unui array folosind Array.prototype.flat():
javascript
Copy
let arr = [[1, 2], [3, 4]].flat(); // [1, 2, 3, 4]
16. Crearea unui array folosind Array.prototype.flatMap():
javascript
Copy
let arr = [1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
17. Crearea unui array folosind Array.prototype.keys() sau values():
javascript
Copy
let arr = Array.from([1, 2, 3].keys()); // [0, 1, 2]
let arr = Array.from([1, 2, 3].values()); // [1, 2, 3]
18. Crearea unui array folosind Array.prototype.entries():
javascript
Copy
let arr = Array.from([1, 2, 3].entries()); // [[0, 1], [1, 2], [2, 3]]
19. Crearea unui array folosind Array.prototype.reverse():
javascript
Copy
let arr = [1, 2, 3].reverse(); // [3, 2, 1]
20. Crearea unui array folosind Array.prototype.sort():
javascript
Copy
let arr = [3, 1, 2].sort(); // [1, 2, 3]
21. Crearea unui array folosind Array.prototype.filter():
javascript
Copy
let arr = [1, 2, 3, 4, 5].filter(x => x > 2); // [3, 4, 5]
22. Crearea unui array folosind Array.prototype.map():
javascript
Copy
let arr = [1, 2, 3].map(x => x * 2); // [2, 4, 6]
23. Crearea unui array folosind Array.prototype.reduce():
javascript
Copy
let arr = [1, 2, 3].reduce((acc, curr) => acc.concat(curr * 2), []); // [2, 4, 6]
24. Crearea unui array folosind Array.prototype.reduceRight():
javascript
Copy
let arr = [1, 2, 3].reduceRight((acc, curr) => acc.concat(curr * 2), []); // [6, 4, 2]
25. Crearea unui array folosind Array.prototype.forEach():
javascript
Copy
let arr = [];
[1, 2, 3].forEach(x => arr.push(x * 2)); // [2, 4, 6]
26. Crearea unui array folosind Array.prototype.every() sau some():
javascript
Copy
let arr = [1, 2, 3].every(x => x > 0); // true
let arr = [1, 2, 3].some(x => x > 2); // true
27. Crearea unui array folosind Array.prototype.find() sau findIndex():
javascript
Copy
let arr = [1, 2, 3].find(x => x > 1); // 2
let arr = [1, 2, 3].findIndex(x => x > 1); // 1
28. Crearea unui array folosind Array.prototype.includes():
javascript
Copy
let arr = [1, 2, 3].includes(2); // true
29. Crearea unui array folosind Array.prototype.join():
javascript
Copy
let arr = [1, 2, 3].join(','); // '1,2,3'
30. Crearea unui array folosind Array.prototype.toString():
javascript
Copy
let arr = [1, 2, 3].toString(); // '1,2,3'
31. Crearea unui array folosind Array.prototype.toLocaleString():
javascript
Copy
let arr = [1, 2, 3].toLocaleString(); // '1,2,3'
32. Crearea unui array folosind Array.prototype.copyWithin():
javascript
Copy
let arr = [1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]
33. Crearea unui array folosind Array.prototype.fill():
javascript
Copy
let arr = new Array(5).fill(0); // [0, 0, 0, 0, 0]
34. Crearea unui array folosind Array.prototype.pop() sau push():
javascript
Copy
let arr = [1, 2, 3];
arr.pop(); // [1, 2]
arr.push(4); // [1, 2, 4]
35. Crearea unui array folosind Array.prototype.shift() sau unshift():
javascript
Copy
let arr = [1, 2, 3];
arr.shift(); // [2, 3]
arr.unshift(0); // [0, 2, 3]
36. Crearea unui array folosind Array.prototype.splice():
javascript
Copy
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5]
37. Crearea unui array folosind Array.prototype.slice():
javascript
Copy
let arr = [1, 2, 3, 4, 5].slice(0, 3); // [1, 2, 3]
38. Crearea unui array folosind Array.prototype.concat():
javascript
Copy
let arr = [1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]
39. Crearea unui array folosind Array.prototype.reverse():
javascript
Copy
let arr = [1, 2, 3].reverse(); // [3, 2, 1]
40. Crearea unui array folosind Array.prototype.sort():
javascript
Copy
let arr = [3, 1, 2].sort(); // [1, 2, 3]
41. Crearea unui array folosind Array.prototype.filter():
javascript
Copy
let arr = [1, 2, 3, 4, 5].filter(x => x > 2); // [3, 4, 5]
42. Crearea unui array folosind Array.prototype.map():
javascript
Copy
let arr = [1, 2, 3].map(x => x * 2); // [2, 4, 6]
43. Crearea unui array folosind Array.prototype.reduce():
javascript
Copy
let arr = [1, 2, 3].reduce((acc, curr) => acc.concat(curr * 2), []); // [2, 4, 6]
44. Crearea unui array folosind Array.prototype.reduceRight():
javascript
Copy
let arr = [1, 2, 3].reduceRight((acc, curr) => acc.concat(curr * 2), []); // [6, 4, 2]
45. Crearea unui array folosind Array.prototype.forEach():
javascript
Copy
let arr = [];
[1, 2, 3].forEach(x => arr.push(x * 2)); // [2, 4, 6]
46. Crearea unui array folosind Array.prototype.every() sau some():
javascript
Copy
let arr = [1, 2, 3].every(x => x > 0); // true
let arr = [1, 2, 3].some(x => x > 2); // true
47. Crearea unui array folosind Array.prototype.find() sau findIndex():
javascript
Copy
let arr = [1, 2, 3].find(x => x > 1); // 2
let arr = [1, 2, 3].findIndex(x => x > 1); // 1
48. Crearea unui array folosind Array.prototype.includes():
javascript
Copy
let arr = [1, 2, 3].includes(2); // true
49. Crearea unui array folosind Array.prototype.join():
javascript
Copy
let arr = [1, 2, 3].join(','); // '1,2,3'
50. Crearea unui array folosind Array.prototype.toString():
javascript
Copy
let arr = [1, 2, 3].toString(); // '1,2,3'
51. Crearea unui array folosind Array.prototype.toLocaleString():
javascript
Copy
let arr = [1, 2, 3].toLocaleString(); // '1,2,3'
52. Crearea unui array folosind Array.prototype.copyWithin():
javascript
Copy
let arr = [1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]
53. Crearea unui array folosind Array.prototype.fill():
javascript
Copy
let arr = new Array(5).fill(0); // [0, 0, 0, 0, 0]
54. Crearea unui array folosind Array.prototype.pop() sau push():
javascript
Copy
let arr = [1, 2, 3];
arr.pop(); // [1, 2]
arr.push(4); // [1, 2, 4]
55. Crearea unui array folosind Array.prototype.shift() sau unshift():
javascript
Copy
let arr = [1, 2, 3];
arr.shift(); // [2, 3]
arr.unshift(0); // [0, 2, 3]
56. Crearea unui array folosind Array.prototype.splice():
javascript
Copy
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5]
57. Crearea unui array folosind Array.prototype.slice():
javascript
Copy
let arr = [1, 2, 3, 4, 5].slice(0, 3); // [1, 2, 3]
58. Crearea unui array folosind Array.prototype.concat():
javascript
Copy
let arr = [1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]
59. Crearea unui array folosind Array.prototype.reverse():
javascript
Copy
let arr = [1, 2, 3].reverse(); // [3, 2, 1]
60. Crearea unui array folosind Array.prototype.sort():
javascript
Copy
let arr = [3, 1, 2].sort(); // [1, 2, 3]
61. Crearea unui array folosind Array.prototype.filter():
javascript
Copy
let arr = [1, 2, 3, 4, 5].filter(x => x > 2); // [3, 4, 5]
62. Crearea unui array folosind Array.prototype.map():
javascript
Copy
let arr = [1, 2, 3].map(x => x * 2); // [2, 4, 6]
63. Crearea unui array folosind Array.prototype.reduce():
javascript
Copy
let arr = [1, 2, 3].reduce((acc, curr) => acc.concat(curr * 2), []); // [2, 4, 6]
64. Crearea unui array folosind Array.prototype.reduceRight():
javascript
Copy
let arr = [1, 2, 3].reduceRight((acc, curr) => acc.concat(curr * 2), []); // [6, 4, 2]
65. Crearea unui array folosind Array.prototype.forEach():
javascript
Copy
let arr = [];
[1, 2, 3].forEach(x => arr.push(x * 2)); // [2, 4, 6]
66. Crearea unui array folosind Array.prototype.every() sau some():
javascript
Copy
let arr = [1, 2, 3].every(x => x > 0); // true
let arr = [1, 2, 3].some(x => x > 2); // true
67. Crearea unui array folosind Array.prototype.find() sau findIndex():
javascript
Copy
let arr = [1, 2, 3].find(x => x > 1); // 2
let arr = [1, 2, 3].findIndex(x => x > 1); // 1
68. Crearea unui array folosind Array.prototype.includes():
javascript
Copy
let arr = [1, 2, 3].includes(2); // true
69. Crearea unui array folosind Array.prototype.join():
javascript
Copy
let arr = [1, 2, 3].join(','); // '1,2,3'
70. Crearea unui array folosind Array.prototype.toString():
javascript
Copy
let arr = [1, 2, 3].toString(); // '1,2,3'
71. Crearea unui array folosind Array.prototype.toLocaleString():
javascript
Copy
let arr = [1, 2, 3].toLocaleString(); // '1,2,3'
72. Crearea unui array folosind Array.prototype.copyWithin():
javascript
Copy
let arr = [1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]
73. Crearea unui array folosind Array.prototype.fill():
javascript
Copy
let arr = new Array(5).fill(0); // [0, 0, 0, 0, 0]
74. Crearea unui array folosind Array.prototype.pop() sau push():
javascript
Copy
let arr = [1, 2, 3];
arr.pop(); // [1, 2]
arr.push(4); // [1, 2, 4]
75. Crearea unui array folosind Array.prototype.shift() sau unshift():
javascript
Copy
let arr = [1, 2, 3];
arr.shift(); // [2, 3]
arr.unshift(0); // [0, 2, 3]
76. Crearea unui array folosind Array.prototype.splice():
javascript
Copy
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5]
77. Crearea unui array folosind Array.prototype.slice():
javascript
Copy
let arr = [1, 2, 3, 4, 5].slice(0, 3); // [1, 2, 3]
78. Crearea unui array folosind Array.prototype.concat():
javascript
Copy
let arr = [1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]
79. Crearea unui array folosind Array.prototype.reverse():
javascript
Copy
let arr = [1, 2, 3].reverse(); // [3, 2, 1]
80. Crearea unui array folosind Array.prototype.sort():
javascript
Copy
let arr = [3, 1, 2].sort(); // [1, 2, 3]
81. Crearea unui array folosind Array.prototype.filter():
javascript
Copy
let arr = [1, 2, 3, 4, 5].filter(x => x > 2); // [3, 4, 5]
82. Crearea unui array folosind Array.prototype.map():
javascript
Copy
let arr = [1, 2, 3].map(x => x * 2); // [2, 4, 6]
83. Crearea unui array folosind Array.prototype.reduce():
javascript
Copy
let arr = [1, 2, 3].reduce((acc, curr) => acc.concat(curr * 2), []); // [2, 4, 6]
84. Crearea unui array folosind Array.prototype.reduceRight():
javascript
Copy
let arr = [1, 2, 3].reduceRight((acc, curr) => acc.concat(curr * 2), []); // [6, 4, 2]
85. Crearea unui array folosind Array.prototype.forEach():
javascript
Copy
let arr = [];
[1, 2, 3].forEach(x => arr.push(x * 2)); // [2, 4, 6]
86. Crearea unui array folosind Array.prototype.every() sau some():
javascript
Copy
let arr = [1, 2, 3].every(x => x > 0); // true
let arr = [1, 2, 3].some(x => x > 2); // true
87. Crearea unui array folosind Array.prototype.find() sau findIndex():
javascript
Copy
let arr = [1, 2, 3].find(x => x > 1); // 2
let arr = [1, 2, 3].findIndex(x => x > 1); // 1
88. Crearea unui array folosind Array.prototype.includes():
javascript
Copy
let arr = [1, 2, 3].includes(2); // true
89. Crearea unui array folosind Array.prototype.join():
javascript
Copy
let arr = [1, 2, 3].join(','); // '1,2,3'
90. Crearea unui array folosind Array.prototype.toString():
javascript
Copy
let arr = [1, 2, 3].toString(); // '1,2,3'
91. Crearea unui array folosind Array.prototype.toLocaleString():
javascript
Copy
let arr = [1, 2, 3].toLocaleString(); // '1,2,3'
92. Crearea unui array folosind Array.prototype.copyWithin():
javascript
Copy
let arr = [1, 2, 3, 4, 5].copyWithin(0, 3); // [4, 5, 3, 4, 5]
93. Crearea unui array folosind Array.prototype.fill():
javascript
Copy
let arr = new Array(5).fill(0); // [0, 0, 0, 0, 0]
94. Crearea unui array folosind Array.prototype.pop() sau push():
javascript
Copy
let arr = [1, 2, 3];
arr.pop(); // [1, 2]
arr.push(4); // [1, 2, 4]
95. Crearea unui array folosind Array.prototype.shift() sau unshift():
javascript
Copy
let arr = [1, 2, 3];
arr.shift(); // [2, 3]
arr.unshift(0); // [0, 2, 3]
96. Crearea unui array folosind Array.prototype.splice():
javascript
Copy
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5]
97. Crearea unui array folosind Array.prototype.slice():
javascript
Copy
let arr = [1, 2, 3, 4, 5].slice(0, 3); // [1, 2, 3]
98. Crearea unui array folosind Array.prototype.concat():
javascript
Copy
let arr = [1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]
99. Crearea unui array folosind Array.prototype.reverse():
javascript
Copy
let arr = [1, 2, 3].reverse(); // [3, 2, 1]
100. Crearea unui array folosind Array.prototype.sort():
javascript
Copy
let arr = [3, 1, 2].sort(); // [1, 2, 3]
Acestea sunt doar câteva dintre metodele prin care poți crea sau 
manipula array - uri în JavaScript.Fiecare metodă are cazuri de utilizare
specifice, așa că este important să le înțelegi pentru a le folosi eficient în proiectele tale.