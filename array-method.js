let a = [1, 2, 3, 4, 5];
console.log(a.length);

a.push(6);
console.log(a.length);

a.pop(6)
console.log(a.length);
a.pop(5);
console.log(a.length);
console.log(a)



console.log(delete a[0]);
console.log(a);

const arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance");
console.log(arr);