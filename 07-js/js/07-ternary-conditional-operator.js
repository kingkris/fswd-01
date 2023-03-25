`use strict`;

let age = 16;
let canVote;

canVote = age>=18 ? canVote = true : canVote = false;

console.log(canVote);

let studentName = "Raju";
let sub1Mark = 10;
let sub2Mark = 30;
let sub3Mark = 24;
let sub4Mark = 34;
let sub5Mark = 12;
let marks;


function addMarks(){
  marks = sub1Mark + sub2Mark+ sub3Mark+ sub4Mark+ sub5Mark
  return `${studentName} has secured ${marks}`;
}



console.log(addMarks());

let result = addMarks();

console.log(result);
findElegibility("Mahesh",30);

function findElegibility(studentName,average){
  console.log(`${studentName} has scored ${average} percentage`);
}

findElegibility("Shashi",99);

num = "30";
console.log(typeof Number(num))
console.log(typeof num);

let printResult = function (studentName, average) { 
  console.log(`${studentName} has scored ${average} percentage`);
}
let printResult2 = function (studentName, average) { 
  return `${studentName} has scored ${average} percentage`;
}

printResult("krishne", 45);
printResult("radhe", 45);
console.log(printResult2("radhe", 45));


const xresult = studentName => `${studentName} has secured 40%`;

// single line arrow functon, no need of return
const findAge = birthYear => 2023 - birthYear;


const findAge2 = (birthYear, currentYear) => {
  return currentYear - birthYear;
}

console.log(xresult("Rani"));
console.log(findAge(1977))
console.log(findAge(1983))
console.log(findAge(1990))
console.log(findAge2(2013,2020))

 