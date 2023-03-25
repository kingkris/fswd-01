const subjects = ['Kannada', 'English', 'Maths', 'Science', 'Social', 'Hindi'];
// const studentDetails = ['Rajesh', '10th a', 123002, subjects, true ];
let age = 30;

const studentDetails = {
  studentname: 'Rajesh',
  age: 15,
  class: '10th a',
  id: 123002,
  subjects: subjects,
  hasPassed: true,
  printResult : function() {
    console.log(`We are happy to give the result of ${this.studentname}. He's ${this.age} years old and studying in ${this.class} Class`)
  }
};

console.log(studentDetails.subjects[subjects.length-1])
console.log(studentDetails.studentname, age)
studentDetails.name = 'Rani';
age = studentDetails.age;
console.log(studentDetails.name, age);

let st = 'student';

console.log(studentDetails[ st + 'name']);

studentDetails.printResult();


// console.log(studentDetails.studentname)
// console.log(studentDetails.age)
// console.log(studentDetails.class)
// console.log(studentDetails.id)
// console.log(studentDetails.subjects)
// console.log(studentDetails.hasPassed)

console.log(subjects[0])
console.log(subjects[1])
console.log(subjects[2])
console.log(subjects[3])
console.log(subjects[4])


for (let i = 0; i < subjects.length;i++) {
  console.log(i, subjects[i])
}

while (condition) {
  
}

