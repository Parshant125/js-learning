let name ={
    firstName : 'Amit',
    lastName : 'Sharma',
    age : 25,  
}

console.log(this.name); // Outputs: undefined
console.log(name.firstName); // Outputs: Amit
console.log(name.lastName); // Outputs: Sharma
console.log(name.age); // Outputs: 25



const policy = {}
policy.type = 'Life Insurance';
policy.amount = 1000000;
policy.duration = 20;
console.log(policy);
console.log(policy.type);


// Arrow functions have no “this”

let messsage = {
    text : 'Hello',
    getText : () => {
        console.log(this.text);
    }
}

const package = {
    items: [
        { name: 'Basic', price: 1000 },
        { name: 'Standard', price: 2000 },
        { name: 'Premium', price: 3000 },
    ],
    details() {
        this.items.forEach(item => {
            console.log(item.name + ' ' + item.price);
        });
    }
};

package.details();

