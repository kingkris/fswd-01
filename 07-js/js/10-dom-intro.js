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

console.log(document.querySelector("#firstName").value);

document.querySelector(".btn-a").addEventListener("click", function () {
  console.log("Btn a clicked");
});

console.log(Math.trunc(Math.random() * 10));

// Find the luckiest one in the group of 10. You need to print 10 cards based on a array of names, use fakeimg to print the image with

// Statistics of your age: Get the users birthday as input from the user on page. based on the input display the details on page, like his age in years, months, weeks, days, hours, minutes and seconds

// Calculate BMI - get gis height and weight, then display some fun content based on various bmi values

// Count down timers

// Find out your Luck quotient! How lucky are you today.
