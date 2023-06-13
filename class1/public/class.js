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



 


