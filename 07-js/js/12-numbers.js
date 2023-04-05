function numberFunction() {}

console.log("12345");
console.log(12345);

// let age = prompt("Enter Your age");

// if (!isNaN(age)) console.log("Yes its a Number");

document.querySelector(".page-header h1").style.fontSize = "65.67px";

let x = document.querySelector(".page-header h1").style.fontSize;

console.log(x);
console.log(parseInt(x));
console.log(parseFloat(x));

x = "  24 march 2024";

console.log(x);
console.log(parseInt(x));
console.log(parseFloat(x));
console.log(isNaN(x));

console.log(isNaN(parseInt(x)));

x = 123.128766;

console.log(Number(x).toFixed(3));

// x = 10,000;

x = 10_000;
console.log(x);
