`use strict`;

const headerEle = document.querySelector("h1");
console.log(headerEle);

let con = document.querySelector(".lead-txt").textContent;

document.querySelector(".lead-txt").textContent =
  "This text is being added from JS";

console.log(con);

headerEle.textContent = "Namaste!";

console.log(document.querySelector("#firstName").value);
document.querySelector("#firstName").value = "Rajesh";

const inptBoxEle = document.querySelector("#firstName");
let inptBoxVal = inptBoxEle.value;
console.log(inptBoxVal);

document.querySelector(".btn-a").addEventListener("click", function () {
  inptBoxVal = Number(inptBoxEle.value);
  console.log(inptBoxVal);

  if (inptBoxVal) {
    console.log(`Year entered is ${inptBoxVal}`);
    console.log(`Age as of Today would be  ${2023 - inptBoxVal} Years`);
    console.log(`Age as of Today would be  ${(2023 - inptBoxVal) * 12} Months`);
    console.log(`Age as of Today would be  ${(2023 - inptBoxVal) * 52} Weeks`);
    console.log(`Age as of Today would be  ${(2023 - inptBoxVal) * 365} Days`);
  }
});

console.log(Math.trunc(Math.random() * 10));

// Find the luckiest one in the group of 10. You need to print 10 cards based on a array of names, use fakeimg to print the image with

// Statistics of your age: Get the users birthday as input from the user on page. based on the input display the details on page, like his age in years, months, weeks, days, hours, minutes and seconds

// Calculate BMI - get gis height and weight, then display some fun content based on various bmi values

// Count down timers

// Find out your Luck quotient! How lucky are you today.

//<div class="the-lucky-one">
//  <img src="https://fakeimg.pl/180x180/CCC?text=Name" />
//  <span>Name the lucky</span>
//</div>;

// Find the luckiest one in the group of 10. You need to print 10 cards based on a array of names, use fakeimg to print the image with

const names = [
  "Raju",
  "Rani",
  "Ramesh",
  "Rangamma",
  "Rohit",
  "Renuka",
  "Rahul",
  "Raagini",
  "Rekha",
  "Rohan",
  "Rajat",
];

const ele = document.querySelector(".cards");

console.log(ele);
let content = "";

const theLuckyOne = Math.trunc(Math.random() * names.length);
console.log("The Random Number generated is " + theLuckyOne);

// for (i = 0; i < names.length; i++) {
//   if (i === theLuckyOne) {
//     console.log(`${i} ${names[i]} is the luckiest One`);
//   }
//   content = `${names[i]}, `;
//   ele.textContent += content;
// }
let str = "";

for (const item of names) {
  console.log("item is at ", names.indexOf(item));
  let sty;
  if (names.indexOf(item) === theLuckyOne) {
    sty = ' class="the-lucky-one"';
  } else {
    sty = "";
  }
  str += `<div ${sty} >
  <img src="https://fakeimg.pl/180x180/CCC?text=${item}" />
  <span>${item}</span>
</div>`;
}

ele.innerHTML = str;

const newEle = document.querySelector(".style-change");

newEle.style.backgroundColor = "red";
newEle.style.borderRadius = "10px";
newEle.style.padding = "10px";

console.log(newEle.classList);

newEle.classList.add("new-class");
console.log(newEle.classList);

newEle.classList.add("another-class");
console.log(newEle.classList);
newEle.classList.remove("another-class");
console.log(newEle.classList);

console.log(newEle.classList.contains("another-class"));

// Display Modal

document.querySelector(".btn-i").addEventListener("click", function () {
  const modal = document.querySelector(".overlay");
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  }
});

document.addEventListener("keypress", function (e) {
  console.log("SOme key Got pressed", e);
});
