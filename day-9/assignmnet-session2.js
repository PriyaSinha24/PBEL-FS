// Part A: Conditions and Operators

// 1. Take a number as input. If the number is divisible by 2, print 'Even'; otherwise print 'Odd'.
let num1 = 4; 
if (num1 % 2 === 0) {
    console.log('Even');
} else {
    console.log('Odd');
}
// Output: Even

// 2. Take a number as input. If it is divisible by 3, print 'Fizz'. If it is divisible by 7, print 'Buzz'. If it is divisible by both 3 and 7, print 'FizzBuzz'.
let num2 = 21; 
if (num2 % 3 === 0 && num2 % 7 === 0) {
    console.log('FizzBuzz');
} else if (num2 % 3 === 0) {
    console.log('Fizz');
} else if (num2 % 7 === 0) {
    console.log('Buzz');
}
// Output: FizzBuzz

// 3. Take three numbers and print the greatest number among them.
let num3 = 10, num4 = 20, num5 = 15;
if (num3 >= num4 && num3 >= num5) {
    console.log(num3);
} else if (num4 >= num3 && num4 >= num5) {
    console.log(num4);
} else {
    console.log(num5);
}
// Output: 20

// 4. Check whether a student has passed or failed. Marks greater than or equal to 40 means Pass.
let marks = 45;
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// Output: Pass

// 5. Predict the output of logical operators (&& and ||).
console.log(true && false); // Output: false 
console.log(true || false); // Output: true 




// Part B: Strings

// 1. Print all vowels from the string 'JavaScript is awesome'.
let str1 = 'JavaScript is awesome';
let vowels = "";
for (let i = 0; i < str1.length; i++) {
    let char = str1[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowels += str1[i];
    }
}
console.log(vowels); 
// Output: aaiiaeeo

// 2. Count the number of vowels in 'Masai School'.
let str2 = 'Masai School';
let vowelCount = 0;
for (let i = 0; i < str2.length; i++) {
    let char = str2[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
    }
}
console.log(vowelCount);
// Output: 5

// 3. Print every character of 'Full Stack Development' using a loop.
let str3 = 'Full Stack Development';
for (let i = 0; i < str3.length; i++) {
    console.log(str3[i]);
}
// Output: F, u, l, l,  , S, t, a, c, k,  , D, e, v, e, l, o, p, m, e, n, t

// 4. Count the number of spaces in 'We are learning JavaScript'.
let str4 = 'We are learning JavaScript';
let spaceCount = 0;
for (let i = 0; i < str4.length; i++) {
    if (str4[i] === ' ') {
        spaceCount++;
    }
}
console.log(spaceCount); 
// Output: 3


// 5. Reverse the string 'Hello'.
let str5 = 'Hello';
let reversed = "";
for (let i = str5.length - 1; i >= 0; i--) {
    reversed += str5[i];
}
console.log(reversed); 
// Output: olleH



// Part C: Loops

// 1. Using a for loop, print numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
// Output: 1 se 20 tak numbers

// 2. Using a while loop, print numbers from 20 to 1.
let i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}
// Output: 20 se 1 tak ulti ginti

// 3. Print the multiplication table of 7.
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}
// Output: 7 ka pahada (7 * 1 = 7... 7 * 10 = 70)

// 4. Print all even numbers from 1 to 50.
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// Output: 2, 4, 6, 8... 50

// 5. Find the sum of all numbers from 1 to 100.
let totalSum = 0;
for (let i = 1; i <= 100; i++) {
    totalSum += i;
}
console.log(totalSum); 
// Output: 5050




// Part D: Arrays

// 1. Create an array [10, 20, 30, 40, 50] and perform array operations such as push, pop, length and update values.
let arr = [10, 20, 30, 40, 50];

arr.push(60); // Adds 60 to the end -> [10, 20, 30, 40, 50, 60]
arr.pop();    // Removes the last element -> [10, 20, 30, 40, 50]

console.log(arr.length); // Output: 5 

arr[1] = 25; // Updates the value at index 1 -> [10, 25, 30, 40, 50]
console.log(arr);

// 2. Using a for...of loop, print all elements of ['Apple', 'Mango', 'Banana', 'Orange'].
let fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
for (let fruit of fruits) {
    console.log(fruit);
}
// Output: Apple, Mango, Banana, Orange (each on a new line)

// 3. Find the largest number in [23, 56, 89, 12, 100, 45].
let numbers = [23, 56, 89, 12, 100, 45];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest); // Output: 100

// 4. Find the sum of all elements in [5, 10, 15, 20, 25].
let sum = 0;
for (let i = 0; i < [5, 10, 15, 20, 25].length; i++) {
    sum += [5, 10, 15, 20, 25][i];
}
console.log(sum); // Output: 75

// 5. Count the number of even numbers in [2, 5, 8, 11, 14, 17, 20].
let countArr = [2, 5, 8, 11, 14, 17, 20];
let evenCount = 0;
for (let num of countArr) {
    if (num % 2 === 0) {
        evenCount++;
    }
}
console.log(evenCount); // Output: 4 




// Part E: Objects and for...in

// 1. Print all keys from a student object using for...in.
let student = {
    name: "Priya",
    age: 22,
    course: "Full Stack",
    subjectMarks: { Math: 94, WebDev: 75, JS: 90 }
};

// 2. Print all values from the object.
for (let key in student) {
    console.log(student[key]);
}
// Output: name, age, course, subjectMarks


// 3. Find the subject with the minimum marks from a marks object.
let marksObj = student.subjectMarks;
let minSubject = "";
let minMarks = Infinity;

for (let sub in marksObj) {
    if (marksObj[sub] < minMarks) {
        minMarks = marksObj[sub];
        minSubject = sub;
    }
}
console.log(minSubject); // Output: WebDev


// 4. Count the total number of properties in an object.
let totalProps = 0;
for (let key in student) {
    totalProps++;
}
console.log(totalProps); // Output: 4


// Part E: Question 5 - Prediction
// Answer: 
/*1. The for...in loop iterates over all the enumerable keys (property names) of an object as strings.
2. For this student object, it will sequentially return the keys: "name", "age", "course", and "subjectMarks".
3. To access the values dynamically inside a for...in loop, we must use bracket notation (student[key]), 
   as dot notation (student.key) would look for a literal property named "key" and return undefined.
*/


// All outputs from 1 to 4 and 5 was prediction
// Priya
// 22
// Full Stack
// { Math: 94, WebDev: 75, JS: 90 }
// WebDev
// 4



// Part F: Functions

// 1. Create a function that takes two numbers and prints their sum.
function printSum(num1, num2) {
    console.log(num1 + num2);
}
printSum(5, 10); // Output: 15


// 2. Create a function that takes a number and prints its square.
function printSquare(n) {
    console.log(n * n);
}
printSquare(6); // Output: 36


// 3. Create an arrow function that takes three numbers and prints their average.
const printAvg = (x, y, z) => console.log((x + y + z) / 3);
printAvg(10, 20, 30); // Output: 20


// 4. Create a function that takes a string and prints its length.
function printLength(text) {
    console.log(text.length);
}
printLength("Hello"); // Output: 5


// 5. Create a function that takes two numbers and prints the greater number.
function printGreater(val1, val2) {
    if (val1 > val2) {
        console.log(val1);
    } else {
        console.log(val2);
    }
}
printGreater(45, 89); // Output: 89


// Part G: Variables (let, const, var)

// 1. Predict the output of using a variable before declaration with var.
console.log(myVar); // Output: undefined
var myVar = 10;
// Explanation: Due to JavaScript Hoisting, the declaration is moved to the top 
// of its scope, initializing it as 'undefined' before the execution starts.


// 2. Predict the output of using a variable before declaration with let.
// console.log(myLet); 
let myLet = 20;
// Explanation: This will throw a "ReferenceError: Cannot access 'myLet' before initialization". 
// Variables declared with 'let' are in the Temporal Dead Zone (TDZ) until declared.


// 3. Predict the output when modifying a const variable.
const myConst = 30;
// myConst = 40; 
// Explanation: This will throw a "TypeError: Assignment to constant variable" 
// because 'const' variables are read-only and cannot be reassigned.

// 4. Write the difference between var, let and const.
/*
  - var:   Function-scoped, can be re-declared, can be updated, and supports hoisting.
  - let:   Block-scoped, cannot be re-declared in the same block, but can be updated.
  - const: Block-scoped, cannot be re-declared or updated; must be initialized immediately.
*/



// CHALLENGE QUESTIONS

// 1. Find the second largest number in an array
let challengeArr = [23, 56, 89, 12, 100, 45];
let max1 = -Infinity;
let max2 = -Infinity;

for (let num of challengeArr) {
    if (num > max1) {
        max2 = max1; 
        max1 = num;  
    } else if (num > max2 && num !== max1) {
        max2 = num;  
    }
}
console.log("Second Largest Number:", max2); // Output: 89


// 2. Count the number of vowels and consonants in a string
let checkStr = "Programming";
let vCount = 0;
let cCount = 0;

for (let i = 0; i < checkStr.length; i++) {
    let char = checkStr[i].toLowerCase();
    
    
    if (char >= 'a' && char <= 'z') {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vCount++; 
        } else {
            cCount++; 
        }
    }
}
console.log("Vowels:", vCount, "| Consonants:", cCount); // Output: Vowels: 3 | Consonants: 8

// 3. Create a student object containing name, age, university, subjects and hobbies, then print all information.
let fullStudent = {
    name: "Priya Sinha",
    age: 22,
    university: "ADTU",
    subjects: ["Full Stack", "Database", "JavaScript"],
    hobbies: ["Playing Games", "Badminton"]
};
console.log(fullStudent);
/*
name: 'Priya Sinha',
  age: 22,
  university: 'ADTU',
  subjects: [ 'Full Stack', 'Database', 'JavaScript' ],
  hobbies: [ 'Playing Games', 'Badminton' ]
*/


// 4. Write a function that checks whether a number is prime or not.
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}
console.log("Is 11 prime?:", isPrime(11)); // Output: true
console.log("Is 4 prime?:", isPrime(4));   // Output: false


// 5. Write a function that reverses a string.
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello")); // Output: olleH


// 6. Create an array of students and print only those whose names start with 'A'.
let studentList = [
    { name: "Akash" }, 
    { name: "Reena" }, 
    { name: "Asha" }, 
    { name: "Sanya" }
];

for (let stud of studentList) {
    if (stud.name[0] === 'A') {
        console.log(stud.name);
    }
}
// Output: Akash, Asha

