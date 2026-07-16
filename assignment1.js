// Part 1: Variables and Data Types

// Question 1
// Create two variables named firstName and lastName and print your full name.

let firstName = "Priya";
let lastName = "Sinha";

console.log(firstName + " " + lastName);

// Output:
// Priya Sinha


// Question 2
// Create a variable age and store your age in it. Print the value and its data type.

let age = 20;

console.log(age);
console.log(typeof age);

// Output:
// 20
// number


// Question 3
// Create variables of type string, number, boolean, undefined, and null.

let name = "Priya";
let marks = 95;
let isStudent = true;
let city;
let value = null;

console.log(typeof name);
console.log(typeof marks);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof value);

// Output:
// string
// number
// boolean
// undefined
// object


// Question 4
// Create two numbers and print their sum, difference, product, and division.

let a = 20;
let b = 5;

console.log("Sum =", a + b);
console.log("Difference =", a - b);
console.log("Product =", a * b);
console.log("Division =", a / b);

// Output:
// Sum = 25
// Difference = 15
// Product = 100
// Division = 4


// Question 5
// Create a variable price = 99.99 and print its data type.

let price = 99.99;

console.log(typeof price);

// Output:
// number



// Question 6
// Predict the output.

console.log(typeof null);
console.log(typeof undefined);

// Output:
// object
// undefined


// ===============================
// Part 2: Comparison Operators

// Question 1
// Create two variables and check ==, ===, !=, !==, >, <, >=, and <=.

let x = 10;
let y = "10";

console.log("x == y :", x == y);
console.log("x === y :", x === y);
console.log("x != y :", x != y);
console.log("x !== y :", x !== y);
console.log("x > y :", x > y);
console.log("x < y :", x < y);
console.log("x >= y :", x >= y);
console.log("x <= y :", x <= y);

// Output:
// x == y : true
// x === y : false
// x != y : false
// x !== y : true
// x > y : false
// x < y : false
// x >= y : true
// x <= y : true


// Question 2
// Predict the output.

console.log(10 == "10");
console.log(10 === "10");

// Output:
// true
// false


// Question 3
// Predict the output.

console.log(null == undefined);
console.log(null === undefined);

// Output:
// true
// false


// Question 4
// Write a program to compare the ages of two people and print who is older.

let age1 = 20;
let age2 = 18;

if (age1 > age2) {
    console.log("Person 1 is older.");
} else if (age2 > age1) {
    console.log("Person 2 is older.");
} else {
    console.log("Both are of the same age.");
}

// Output:
// Person 1 is older.


// ===============================
// Part 3: Conditional Statements


// Question 1
// Write a program to check whether a number is positive or negative.

let num = 10;

if (num >= 0) {
    console.log("Positive Number");
} else {
    console.log("Negative Number");
}

// Output:
// Positive Number


// Question 2
// Write a program to check whether a student has passed or failed.
// Passing marks are 40.

let marks1 = 65;

if (marks1 >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Output:
// Pass



// Question 3
// Write a program to find the larger number between two numbers.

let a = 15;
let b = 25;

if (a > b) {
    console.log(a + " is larger.");
} else {
    console.log(b + " is larger.");
}

// Output:
// 25 is larger.



// Question 4
// Write a program to find the largest among three numbers.

let x = 20;
let y = 35;
let z = 30;

if (x >= y && x >= z) {
    console.log(x + " is the largest.");
} else if (y >= x && y >= z) {
    console.log(y + " is the largest.");
} else {
    console.log(z + " is the largest.");
}

// Output:
// 35 is the largest.



// Question 5
// Write a program to check whether a number is even or odd.

let number = 8;

if (number % 2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// Output:
// Even Number


// Question 6
// Write a program that prints:
// Excellent (marks above 90)
// Good (75-90)
// Average (50-74)
// Fail (below 50)

let score = 82;

if (score > 90) {
    console.log("Excellent");
} else if (score >= 75) {
    console.log("Good");
} else if (score >= 50) {
    console.log("Average");
} else {
    console.log("Fail");
}

// Output:
// Good



// ===============================
// Part 4: Arrays


// Question 1
// Create an array containing a string, number, boolean, null, and undefined.

let arr = ["Priya", 20, true, null, undefined];

console.log(arr);

// Output:
// [ 'Priya', 20, true, null, undefined ]


// Question 2
// Print the first element, last element, and length of the array.

console.log("First Element:", arr[0]);
console.log("Last Element:", arr[arr.length - 1]);
console.log("Length:", arr.length);

// Output:
// First Element: Priya
// Last Element: undefined
// Length: 5


// Question 3
// Add two elements using push().

arr.push("Grapes");
arr.push(100);

console.log(arr);

// Output:
// [ 'Priya', 20, true, null, undefined, 'Grapes', 100 ]



// Question 4
// Remove the last element using pop().

arr.pop();

console.log(arr);

// Output:
// [ 'Priya', 20, true, null, undefined, 'Grapes' ]


// Question 5
// Replace the third element with your city name.

arr[2] = "Guwahati";

console.log(arr);

// Output:
// [ 'Priya', 20, 'Guwahati', null, undefined, 'Apple' ]



// Question 6
// Create the array [10, 20, 30, 40, 50] and perform the operations.

let numbers = [10, 20, 30, 40, 50];

console.log("Length:", numbers.length);

numbers.push(60);
numbers.pop();

numbers[2] = 100;

console.log("Final Array:", numbers);

// Output:
// Length: 5
// Final Array: [10, 20, 100, 40, 50]



// Question 7
// Create a nested array and print 3, 5, and the length of the nested array.

let data = [1, 2, [3, 4, 5], 6];

console.log(data[2][0]);
console.log(data[2][2]);
console.log(data[2].length);

// Output:
// 3
// 5
// 3



// ===============================
// Part 5: Output Prediction

// Question 1
// Predict the output.

let x = 10;
let y = "10";

console.log(x == y);
console.log(x === y);

// Output:
// true
// false


// Question 2
// Predict the output.

let arr = [1, 2, 3];

arr.push(4);
arr.pop();

console.log(arr);

// Output:
// [1, 2, 3]


// Question 3
// Predict the output.

let arr = ["A", "B", "C"];

arr[1] = "Z";

console.log(arr);

// Output:
// ["A", "Z", "C"]

