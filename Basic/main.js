console.log("Hello Tahdi")
// This is my first JavaScript code
var age01 =20;
console.log(age01);
let age02 =29;
console.log(age02);
isSignedUp = true;
console.log(isSignedUp);
var data01 = null;
console.log(data01);
var data02;
console.log(data02); //undefined
var score = 55;
var high_score = 145;
console.log("score is",score);
console.log("High Score is",high_score);

// constant veriable ;
const PI =3.1416;
console.log(PI);
/*
/////////////////// Comment ///////////////
*/
//  `````````````````` Operation``````````````````
// /////////Arithmetic Operation
var productOne = 568;
var productTwo = 353;
var productThree = 241;
console.log("Product One Price =",productOne);
console.log("Product Two Price =",productTwo);
console.log("Product Three Price =",productThree);

// var totalCardValue = productOne + productTwo;
// console.log("Total Card Value is ৳",totalCardValue);
// // 2nd Example
// var totalCardValue02 = 921;
// var productTwo02 = 353;
// var updateCardValue = totalCardValue02 - productTwo02;
// console.log("Card Value is ৳",updateCardValue);
// var productQuantites = 5;
// var updateCardValue02 = (productQuantites * productOne) + productTwo;
// console.log("Card Value is ৳",updateCardValue02);
// var productOne02 = ++productOne;
// console.log("Product One Value is",productOne02);
// var productTwo03 = --productTwo;
// console.log("Product Two Value is",productTwo03);
// var updateCardValue03 = (productQuantite

var productQuOfP1 = 5;
var totalPrOfP1 = productOne * productQuOfP1;
var productQuOfP2 = 5;
var totalPrOfP2 = productTwo * productQuOfP2;
var productQuOfP3 = 5;
var totalPrOfP3 = productThree * productQuOfP3;
var totalCardPrice = totalPrOfP1 + totalPrOfP2 + totalPrOfP3;
console.log("Total Price ৳",totalCardPrice);

// comparism Operator

var num1, num2;
num1 = 8;
num2 = 15;
console.log("8 == 15 is",(num1 == num2));
console.log("8 != 15 is",(num1 != num2));
console.log("8 > 15 is",(num1 > num2));
console.log("8 < 15 is",(num1 < num2));
console.log("8 >= 15 is",(num1 >= num2));
console.log("8 <= 15 is",(num1 <= num2));

// Logical Operator

var a = 5;
var b = 6;
var resultOne, resultTwo;
resultOne = (a<b) && (b>a);
resultTwo = (a<b) || (b>a);
console.log("Example of AMD Operator",resultOne);
console.log("Example of OR Operator",resultTwo);

// Assingment Operator

var num = 10;
console.log(num)

// conditional Operator

if(true) {
    console.log("Inside if block")
}
if(false){
    console.log("Inside if block")
};
var number = 6;
if(number > 5) {
    console.log("The number is greater than 5")
};
var imdb = 5;
if(imdb > 7) {
    console.log("You can watch the movie")
}
else{
    console.log("You can skip the movie")
}
var imdb02 = 7;
if(imdb02 > 8) {
    console.log("Must watch the movie")
} else if (imdb02 > 6 && imdb <=8) {
    console.log("Add to watch list")
} else {
    console.log("You can skip the movie")
}

// More Condition

var grade = "B";
switch(grade) {
    case 'A' :
        console.log("Excellent");
        break;
    case 'B' :
        console.log("Good");
        break;
    case 'C' :
        console.log("Average");
        break;
    case 'D' :
        console.log("Bellow Average");
        break;
    case 'F' :
        console.log("Fail");
        break;
    default :
        console.log("The gread is invalid");
};
// var amTaka = 5000;
// switch (amTaka) {
//     case (amTaka <= 6000 && amTaka == 5000) :
//         console.log("A+");
//         break;
//     case (amTaka <= 5000 && amTaka == 4500) :
//         console.log("A");
//         break;
//     case (amTaka < 4500 && amTaka == 4000) :
//         console.log("B");
//         break;
//     default :
//         console.log("c")
// }
var num;
for (num = 1; num <6; num++) {
    console.log(num);
};
var num02;
for (num02 = 1; num02 <11; num02++) {
    if(num02 %2 ==0) {
        console.log(num02)
    }
};
// var num03 = 1;
// while(true) {
//     console.log("Hello World");
//     num++;
//`````````````````break````````````````````

var i;
for (i = 1; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
};

// ```````````````Function ```````````````````

/*
`````````````` Syntax of Function Expression ``````````

                1st Sayntax 

var/let vaiablename = function(parameters) {
    //statements
    //return statement
};
vaiabelename(); //function call 

        2nd Sayntax
  
var/let variablename = function functionname(parameters){
    //statements
    //return statements
};
variablename (); //function call
*/;

var language = function() {
    console.log("JavaScript")
};
language();

var add = function(num04, num05) {
    var num06 = num04 + num05;
    return num06;
};
console.log("Addition is,",add(5, 7));

/*
////////////////////// Operator////
*/
{
let x = "Tahdi";
let y = "Islam";
let z = x + " " + y;
console.log(z);
}
{
    let x = "Tahdi";
        x += " Islam";
    console.log(x);
}
/*

     Note => if Operator Is Addition(+)
            Then Priority 
                            string > number
                Ex: bellow
*/
{
    let x = 3 + 5;
    let y = "4" + 4;
    let z = "Hello" + 10;
    console.log(x);
    console.log(y);
    console.log(z);
}
///////////////////////////
///////////////// Function /////////////////
///////////////////////////////
function sleep(names, time) {
    console.log(names + " is sleeping from " + time);
};
sleep("Jashim", "10 pm")
sleep("Karim", "12 pm")
function multipule(a, b) {
    return a * b;
}
let x = multipule (3, 5);
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32)
}
document.getElementById("demo").innerHTML
= toCelsius(100);
//////////////////////////////////
///////////////// Object ////////////////
//////////////////////////////////////

const car = {
    name: "Fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    start: function () {
        this.drive
        console.log("car has started");
    },
    drive: function () {
        console.log("car is driving");
    },
};  
console.log(car.weight);
console.log(car["model"]);
car.start ()
////////////////

//////// JS String Template /////
 
//////////////////////////

{
    let country = `Bangladesh`
    let x = 15;
    let y = 3;
    let main = `My country name is ${country}. There 
    ${x + y} crore people live in my country.`;
    console.log(main);
}
{
    const fruits = ["banana", "Apple", "Orange", "Lemon",];
    // let flen = fruits.length;

    // for (i = 0; i < flen; i++);    {
    //     console.log(i)
    //     console.log(fruits[i]);
    // }
    // console.log("finished")

    function myFunction(value) {
        console.log(value)
    }
    fruits.forEach(myFunction);
    console.log("Finished")
}

// ////////////////
///// Practice
// ////////////////////

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
}

console.log(getRandomNumber(1, 6));

// ////////////
// /// 2nd practice
// ///////////////////////////////
const student = ["Tahdi", "Ibrahim", "Rayhan", "Sakib", "Sumit"]

console.log(student.sort());

// ``````
//  3rd practice

const roll_number = [2, 5, 3, 1, 9, 6,17,7];

console.log(roll_number.sort(function(a, b) {
    return a - b;
}))
