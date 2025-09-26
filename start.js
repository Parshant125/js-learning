const number =[12,3,4,5,77];
const sequre = number.map(num => num**2);
console.log(squares);


const myArry =[1,2,3,4,4,"parshant","hello"]
console.log(myArry[0]);


myArry.push(456,234,4,4,4,4)
 myArry.unshift(12)
myArry.shift()


myArry.pop()
console.log(myArry);

const newArry =myArry.join()
console.log(typeof newArry);


console.log(myArry.includes(3));
console.log(myArry.indexOf(13));



console.log('A',myArry);
const myn1 = myArry.slice(1,3,4)
console.log(myn1);
console.log('B',myArry);


const myn2 = myArry.slice(1,4)

console.log(myn2);

const myn4 = myArry.slice(1,6)
console.log(myn4);


const myn3 = myArry.splice(1,6)

console.log(myn3);
