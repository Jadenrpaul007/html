/*
console.log(40 + 8 + 23 - 10);
console.log('Jaden');
console.log(14);

let firstName = "Jaden";
console.log(firstName);
*/

/* Rules for naming variables =
   1. always use camelCase 
   2. or divide the words with underscore
   3. cannot start with a number
   4. can only contain letters, numbers and dollar sign
   5. cannot use reserved keyword in js
   6. ex - function, new etc.
*/

/* const now = 2022;
const ageJaden = now - 2007;
const ageGrace = now - 2011;
console.log(ageJaden)
*/

/* 7 data types 
1. number   ex- age= 23;
2. string     ex- firstName="Kid";
3. boolean   ex- fullAge= true;
4. undefined  ex- let children;
5. null 
6. symbol
7. bigint.
*/

/*
// ARRAYS
const fruits = ["apple", "banana", "orange", "mango", "grapes", "pineapple", "pomegranate", "avocado"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

for (let x = 0; x < fruits.length; x++) {
   console.log(fruits[x]);

}

// document.getElementById("fruits").innerHTML=fruits;;
*/ 

/*
// OBJECTS
const fruits = {apple:"red", banana:"yellow", grapes:"purple"};
console.log(fruits);
console.log(fruits.apple);
console.log(fruits.banana);
console.log(fruits.grapes);

console.log(`An apple is ${fruits.apple}`)
console.log(`A banana is ${fruits.banana}`)
console.log(`Grapes are ${fruits.grapes}`)


const family = [ {oliveGarden:4}, {graceDomain:4}, {harvestChurch:999} ];
console.log(family)
console.log(family[0])
console.log(family[1])
console.log(family[2])
*/

// BMI = mass / (height * height)
// mass in kg and height in meter

/*
const markWeight = 75;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

console.log('BMI for Mark and John respectively using data 1');
const markBMI = markWeight / (markHeight * markHeight);
console.log(markBMI);
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);
const BMI = markBMI>johnBMI;
console.log(`Using test data 1, Mark has a higher BMI than John is ${BMI}`);

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

console.log('BMI for Mark and John respectively using data 2');
const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
console.log(markBMI2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);
console.log(johnBMI2);

console.log('MarkBMI greater than JohnBMI with data 1');
console.log(markBMI>johnBMI);

console.log('MarkBMI greater than JohnBMI with data 2');
const BMI2 = markBMI2>johnBMI2;
console.log(markBMI2>johnBMI2);
console.log(`Using test data 2, Mark has a higher BMI than John is ${BMI2}`);
*/

/*
const firstName = 'Jaden';
const job = 'software developer';
const birthYear = '2007';
const year = '2022'

const Jaden = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(Jaden);
const Jaden2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(Jaden2);
*/

/*
console.log('String with \n\
multiple \n\
lines \n\
using "reverse slash-n-reverse slash" js bug')

console.log(`Sting with
multiple
lines
using template literals's backticks`)
*/

/*
const firstName = 'Jaden';
const age = 15;
const yearsLeft = 18-age;

if (age>=18) {
   console.log(`${firstName} can start driving`)
} else {
   console.log(`${firstName} must wait for ${yearsLeft} more years to start driving.`)
}
*/ 
/*
const birthYear = 2007;

if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}
*/
/*
const markWeight = 75;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(`Mark's BMI is ${markBMI}`)
console.log(`John's BMI is ${johnBMI}`)

if (markBMI > johnBMI) {
   console.log(`Mark's BMI (${markBMI}) is greater than John's BMI (${johnBMI})`);
} else {
   console.log(`John's BMI ${johnBMI} is greater than Mark's BMI ${markBMI}`);
}
*/

// TYPE CONVERSION
/*
const inputYear = '2007';
// string
console.log(inputYear + 18);
// will not add 2007 with 18, but will simply show as 200718
console.log(inputYear);
// string
console.log(Number(inputYear));
// this now makes input year as a number not a string
console.log(Number(inputYear) + 18);
// now adding a number with a number so will add 2007 and 18
console.log(Number('Jaden'));
// will show as NaN because this strings such as this cannot be converted
*/
// TYPE COERCION
/*
console.log('I am ' + 15 + ' years old');
// the plus here triggers the 15 number to auto convert into a string
// here "i'm" and "years old" is a string and "15" is a number, but in result it shows as one single string
// same thing happens in template literals
console.log('I am ' + String(15) + ' years old');
// like this we would have to do manually to make it one big string if js did not have auto conversion, unlike many other languages which do not have coercion
console.log('23' - '10' - 3);
// result 10 because it auto converted string to number and performed 23-10-3
console.log('23' + '10' + 3);
// but here result 23103 because it concatenated instead of adding the three numbers
console.log('20' * 2);
// result 40 because auto converts and performs 20x2
console.log('20' / 2);
// result 10 because auto converts and performs 20/2

let n = '1' + 1;
n = n - 1;
console.log(n);
// first line concatenates and makes it 11 then subtracted by 1
*/
/*
// 5 falsy values: 0, '', undefined, null, NaN
// will be false if converted to a boolean but not false initially
// following examples are type conversion there are two scenarios when type coercion
/*
console.log(Boolean(0)); // 0 false
console.log(Boolean()); // empty string false
console.log(Boolean(undefined)); // undefined false
console.log(Boolean('Jaden')); // string so not false
console.log(Boolean({})); // empty object not false only emplty string so true

// boolean's two coercion scenarios: when using logical operators and logical context

const money = 0;
if (money) {
   console.log("Don't spend it all.");
} else {
   console.log('You should get a job!');
}
// because 0 is now a boolean and hence a false value so will perform else block

let height;
if (height) {
   console.log('Yay! Height is defined');
} else {
   console.log('Height is undefined.');
}
// undefined is also a falsy value so else block is performed
*/

/*
const age = 18;

if (age === 18) console.log('You have become an adult (strict)');
// here {} can be ommited because there is only one 'if statement' block

if (age == 18) console.log('You have become an adult (loose)');
// strict === equal does not do type coercion loose == equal does type coercion
*/

/*
const firstName = prompt("Your name 👇🏼");
const color = prompt("Your favourite colour 👇🏼");
const number = prompt("Your favourite number 👇🏼");
const age = prompt("Your age 👇🏼");
document.getElementById("data").innerHTML = `Hello ${firstName}, Even I am ${age} years old. ${color} is a nice colour. Wow, ${number} is my favourite number too.`;
// above line is for displaying on webpage also

console.log(`Hello, ${firstName}`);
console.log(`${color} is a nice colour`);
console.log(`Wow! ${number} is my favourite number too`);
if (firstName == 'grace') { console.log(`Ha! You are ${age} years old and still can not read`)};
if (firstName == 'jaden') { console.log(`Hello ${firstName}, my creator, please create more and awesome programming stuff`)};
if (firstName == 'papa') { console.log(`Imposter! ${age} is at office.`)};
if (firstName == 'anisa') { console.log(`${firstname} look at your WAM! `)};
if (firstName == 'mama') { console.log(`${firstName} look at your WAM! `)};
if (firstName == 'paul') { console.log(`Imposter! ${firstName} is at office.`)};
*/