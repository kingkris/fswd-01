const now = new Date();
console.log(now);

const newDate = new Date(2023, 3, 8);
console.log(newDate);

console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.toISOString());
newDate.setFullYear(2023);
console.log(newDate);
x = Date.now();

console.log(x);

x = newDate - now;
console.log(x); // value in milliseconds

// 1 day in sec
// 1 * 24 * 60 * 60 * 1000
days = x / (1000 * 60 * 60 * 24);

days = `Difference is ${Math.trunc(days)} days`;

console.log(days);
