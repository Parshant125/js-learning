 
 // using while loop case
let i =6;
while(i>0){
    console.log (i);
    i--;
}

 // using switch case
let x =6;
switch(x){
    case 1:
        console.log('x is 1');
    case 2:
        console.log('x is 2');
    case 3:
        console.log('x is 3');
    case 4:
        console.log('x is 4');
    case 5:
        console.log('x is 5');
    case 6:
        console.log('x is 6');
}

// using if else case
let age = 25;
if(age > 18){
    console.log('You are eligible to vote');
}else{
    console.log('You are not eligible to vote');
}

//using if else if case
if(age < 18){
    console.log('You are a minor');
}else if(age >= 18 && age < 65){
    console.log('You are an adult');
}else{
    console.log('You are a senior citizen');
}


//using ternary operator
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);