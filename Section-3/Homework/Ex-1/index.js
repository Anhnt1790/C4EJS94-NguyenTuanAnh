console.log('Example swapping between 2 variables');
console.log('Ex-1:');
console.log('a = 1, b = 2');
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(`a = ${a}  b = ${b}`);

console.log('Ex-2');
console.log('a = 5, b = 10');
a = 5;
b = 10;
a = [b, b = a][0];
console.log(`a = ${a}  b = ${b}`);
