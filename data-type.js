// Using type of data type
// 1. String

let message = "hello";
console.log(message);
console.log(typeof message);

// 2. Number
let price=12434356;
console.log(price);
console.log(typeof price);

// 3. Boolean
let signIn = true;
console.log(signIn);
console.log(typeof signIn);

// 4.Null
let data = null;
console.log(data);
console.log(typeof data);

// 5. Undefined
let user;
console.log(user);
console.log(typeof user);

// 6. BigInt
let n = BigInt("1234567890123456789012345678901234567890");
console.log(n);
console.log(typeof n);

// 7. Symbol
let id = Symbol("123");
console.log(id);
console.log(typeof id);

//8. array
let fruits = ["apple", "banana", "grapes"];
console.log(fruits);
console.log(typeof fruits);
console.log(typeof fruits[0]);
console.log(`Name ${fruits[2]}`);

// 8. Object
let person = {name: "John", age: 30};
console.log(person);
console.log(typeof person);