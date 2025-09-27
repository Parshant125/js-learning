// object copying

let name =  "akhil";
let people = name;
console.log(name, people);

const package = 1234;
const pack = package;
console.log(package, pack);

let person = {
    name : 'Aqil',
    age : 24,
}
let emp = person;
console.log(person, emp);



let a ={}
let b =a;
console.log(a ==b);
console.log(a===b);