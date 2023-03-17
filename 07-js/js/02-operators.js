let physicsMarks = 77;
let mathMarks = 75;
let scienceMarks = 77;

console.log(physicsMarks + mathMarks)
console.log(physicsMarks - mathMarks)
console.log(physicsMarks * mathMarks)
console.log(physicsMarks / mathMarks)


console.log(2 ** 3) // 2 to the power of 3 (2 * 2 * 2)

console.log(10 % 4)

let x;


x = 20; // assigning a number value to a variable
let city = "Mysore"; // creating and assigning a string value to a variable
console.log(x, city)
x += 20; // x = x + 20
console.log(x)
x -= 20; // x = x - 20
console.log(x)
x *= 10; // x = x * 10
console.log(x)
x /= 10; // x = x / 10
console.log(x)

// increment operator
console.log(x++)
console.log(x)

console.log(++x)
console.log(x)

if(mathMarks < physicsMarks ){
  console.log("You are a Math Genius")
} else{
  console.log('You need to work more on Math')
}

if(mathMarks >= 75){
  console.log("You've scored 75 or above in Physics")
}
