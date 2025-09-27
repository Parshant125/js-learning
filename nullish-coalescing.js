let user = "John";

console.log(user ?? "Anonymous"); // Outputs: John


const firstName = null; 
const lastName = "Doe"; // lastName is not null

console.log(firstName ?? lastName ?? "Anonymous"); // Outputs: Doe

let height = null; // height is null
console.log(height ?? 100); // Outputs: 100

const price = undefined;
console.log(price ?? 600); // Outputs: 600


const value = undefined;
console.log(value || 10000);    // Outputs: 10000

const value2 = 5000; // value2 is not null
console.log(value2 || 3000);    // Outputs: 3000