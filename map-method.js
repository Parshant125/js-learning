// using map method
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

let pack =['apple', 'banana', 'orange'];
let package =pack.map(pack => pack.toUpperCase());

console.log(package);

let num = 255;

console.log( num.toString(12) );


let map = new Map();

map.set('1', 'str1');   
map.set(1, 'num1');    
map.set(true, 'bool1');



console.log( map.get(1));
console.log( map.get('1') );

console.log( map.size );