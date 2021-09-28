/*
    JavaScript Programming exercise 2
    Strings and string functions
    Oscar Vazquez
*/

let l = "~~~~~~~~~~~~";

let firstName = 'Oscar';
let lastName = "Vazquez";
let age = 33;

console.log(1);
//Concatenation
let messageconcatenation = ' My name is ' + firstName + ' ' + lastName + ' and my age is ' + age;
console.log(messageconcatenation);
console.log(1);

//String Template / Template Literals
let messageStringLiteral = `My name is ${firstName} ${lastName} and my age is ${age}`;
console.log(messageStringLiteral);
console.log(1);

//Escape & New Line
let a = "Add a new line \n This is a new line";
console.log(a);
console.log(l);

let b = "I quoted the person as saying \"I love JavaScript\".";
console.log(b);
console.log(l);

let c = 'It\'s right over there.';
console.log(c);
console.log(l);

let e = "It's right over there.";
console.log(e);
console.log(l);

console.log("String Functions");
let f = "abcdefg";
//Length of F
console.log(`Length of f - ${f.length}`);

//toUpper
f = f.toUpperCase();
console.log(f);

//toLower
f = f.toUpperCase();
console.log(f);

//substr
let g = f.substr(2,4);
console.log(g);

//substring
let h = f.substring(3);
console.log(h);

//indexOf
let index = f.indexOf("c");
console.log(index);


