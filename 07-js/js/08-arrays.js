const grocerylist = ['Tea', 'Sugar', 'Rice', 'Dal', 'Milk', 'Butter'];
const subjects = ['Kannada', 'English', 'Maths', 'Science', 'Social'];
const marks = new Array(20, 30, 40, 65, 11);

console.log(marks, subjects );
console.log(grocerylist);
console.log(typeof grocerylist);

console.log(grocerylist[0]);
console.log(grocerylist[1]);
console.log(grocerylist[grocerylist.length - 1]);
console.log(grocerylist);

let len = grocerylist.push('Ragi');
console.log(len, grocerylist);

len = grocerylist.unshift('Biscuits');
console.log(len, grocerylist);

let item = grocerylist.pop()
console.log(item, grocerylist);

// grocerylist.shift()
item = grocerylist.shift()
console.log(item, grocerylist);

console.log(grocerylist.indexOf('Dal'));
console.log(grocerylist.indexOf('Ragi'));

console.log(grocerylist.includes('Ragi'));
console.log(grocerylist.includes('Rice'));


const studentDetails = ['Rajesh', '10th a', 123002, subjects, true ];

console.log(studentDetails[3])

