function isEven(num) {
if(num % 2 === 0) {
    return true
}
else {
   return false
}

}

isEven(10)
console.log(isEven(7));

// q2

//var x=5;
//var Y='NISHANTH';

const student = [{
    name: "nishanth",
    age: 25
},
{
    name: "red",
    age: 26
}, 
{
    name: "blue",
    age: 27
}]

for(var i=0; i<student.length; i++) {
    console.log(student[i].name);
}

// q3
const student1 = [{
    name: "nissi",
    email: "nissi@gmail.com"
},
{
    name: "gissi",
    email: "gissi@gmail.com"
},
{
    name: "niddi",
    email: "niddi@gmail.com"
}]

function findEmailByName(student1, name) {
    for(let i=0;i<student1.length;i++) {
        if(student1[i].name === name) {
            return student1[i].email;
        }
    }
}
const output = findEmailByName(student1, "niddi");
console.log(output);

// q4

function isPositive(num) {
if(num>0)
    return true;
else
    return false;
}
console.log(isPositive(-2));

// q5
var grade = 85;
if (grade<=60){
    console.log("pass");
}
else 
    console.log("fail");

//q7
const arr=[1,2,3,4,5];
var sum = 0;


for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
    console.log(sum)
}

//q8
var name = "alice";
if(name == 'alice'){
    console.log("hello alice");
}
else
    console.log("hello stranger");

//q9
const books = [{
    author: "ran",
    title: "ban"
}, 
{
    author: "jan",
    title: "qefkglososkc"
},
{
    author: "kuth",
    title: "The Great Gatsby"
}]

function findAuthorByTitle (books, title) {
    for(let i=0;i<books.length;i++) {
        if(books[i].title === title)
            return books[i].author;
    }
}

const output1 = findAuthorByTitle(books, "The Great Gatsby");
console.log(output1);

// q10
function calculateArea(length,  width) {
    let area = 0;
    area = length * width;
    return area;
}

const output3 = calculateArea(4, 5);
console.log(output3);

// q11
function primeNum(n) {
    for(var i=0;i<=n;i++) {
        if(isPrime(i))
            console.log(i);
    }
}
function isPrime(num) {
    if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
}

primeNum(20);

//java script 2nd assi

//q1
const arr1 = ["panni", "njsj", "ikik", "hiihu"];
arr1.push("hyder");
console.log(arr1);

//q2

arr1.pop();
console.log(arr1);

//q3
const arr2=["hihihi","hello","jijiji"];
const arr3=["super"];
const value= arr2.concat(arr3);
console.log(value);

//q4
const nin=["gun","min","chim"];
const result = nin.indexOf("min");
console.log(result);

//Q5
const result1 = nin.slice(1);
console.log(result1);

//q6
var word1=("niSSSk kAAnth");
var word1 = word1.toUpperCase();
console.log(word1);
//q7
var word1 = word1.toLowerCase();
console.log(word1);

//q8

var rin=("kdkdkdkkdk dkddkdkkdk");
var rin = rin.split(" ");
console.log(rin);

//q9

var word1 = word1.charAt(5);
console.log(word1);

//q10

var king=("nishanth");
var king = king.substring(3,8);
console.log(king);

//q11

function doubleArray(arr) {
    const double = arr.map((element) => element *2);
    return double;
}

const arr4 = [2, 4, 10, 18];
const double = doubleArray(arr4);
console.log(double);

//q12

function removeEvenNumbers(arr) {
const oddNumbers = arr.filter( (element) => element % 2 !=0);
return oddNumbers;
}

const arr5 = [1,2,3,4,5]

const odd = removeEvenNumbers(arr5);
console.log(odd);


 




 


