`use strict`;

const ele = document.querySelector(".the-lucky-one");

console.log(ele.classList);
ele.classList.replace("new-card", "new-bg");
if (ele.classList.contains("with-border")) console.log("Yes there is Border");

ele.classList.toggle("with-border");
console.log(ele.classList);

ele.classList.toggle("with-border");
console.log(ele.classList);

const newEle = document.querySelector(".dabba img");
console.log(newEle.getAttribute("src"));

newEle.addEventListener("click", function () {
  const currentImage = this.getAttribute("src");

  console.log(currentImage.length);
  console.log(currentImage.indexOf("e"));
  console.log(currentImage.lastIndexOf("e"));

  const temp = currentImage.slice(currentImage.lastIndexOf("_"));
  console.log(temp);

  this.setAttribute("src", "images/scenery_02.jpg");
});

let temp = "   Abnsd asdad asdasd    \n";
console.log(temp);
console.log(temp.trim());
temp = "KriShne Gowda NL";
let age = "30";
let city = "Mysuru";
let phone = "9880439463";

console.log(temp.length);
console.log(temp.padStart(25, "*").padEnd(35, "*"));
console.log(age.padStart(25, "*").padEnd(35, "*"));
console.log(city.padStart(25, "*").padEnd(35, "*"));

temp = phone.slice(-4);
const maskedPhone = temp.padStart(phone.length, "*");

console.log(maskedPhone);

const isEven = function (x) {
  console.log("Yes---");
};

const isX = (x) => x % 2 === 0;
isEven(20);
console.log(isX(3));
