let name ={
    firstName : 'Amit',
    lastName : 'Sharma',
    age : 25,
}
console.log(name);


const manyNames =[
    {firstName : 'Sham', lastName : 'Sharma', age : 25},
    {firstName : 'Raj', lastName : 'Kumar', age : 30},
]
console.log(manyNames);

console.log(manyNames[0].firstName);
console.log(manyNames[1].age);
console.log(manyNames.length);

let car =[
    {color : 'red' ,type: '4*4', model : 2015},
    {color : 'black' ,type: 'sedan', model : 2018},
    {color : 'white' ,type: 'suv', model : 2020},
]
console.log(car);
console.log(car[0].color);
console.log(car[1].type);
console.log(car[2].model);



let user = {}

user['name'] = 'Shivam';
user['age'] = 24;
user['city'] = 'Delhi';
console.log(user['name']);


let product = {}

product['name'] = 'Laptop';
product['price'] = 50000;
product['brand'] = 'Dell';
console.log(product['name']+' ' + product['price']+' ' + product['brand']);
console.log(product);