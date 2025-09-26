const abc = x => x*x;
console.log(abc(6+10-2));


const multi = x => x*x+x-x/x%x;
console.log(multi(10));



const hi = (name) => {
    const msg = 'hello ' + name;
    return msg;
}
console.log(hi('amit'));


const frank =(name, index) => {
    const newName ='hi'+ name;
    const newIndex ='num' + index;
return newName,newIndex;
}
console.log(frank('sham','32'));

const user = (id, name) => ({ id, name });
console.log(user(1, "Maya")); 



const number = [1, 2, 3, 4, 5];

const mult = number.map(n => n * 10);
console.log(mult);


 const abcd = [
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 67 },
  { value: 3 }
];
const  def = abcd.map(m => ({ value: m.value + 2 }));
console.log(def);


if (typeof alert !== 'undefined') {
    alert('Hello'); alert('World');
} else {
    console.log('Hello'); console.log('World');
}


