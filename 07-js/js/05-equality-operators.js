const age = 18;
const ageToVote = 18;

console.log(typeof age, age)
console.log(typeof ageToVote, ageToVote)

if(age == "18") console.log("1. You can Vote")
if(age === ageToVote) console.log("2. You can Vote")

let yourAge = Number(prompt("What is your age"));
console.log(typeof yourAge, yourAge)


let hasID = false;

let hasVoterID = true;
let hasAadharID = false;

if(yourAge >= ageToVote && !hasID)
{
  console.log("inside the first control")
  if(hasVoterID || hasAadharID)
  console.log("3. You can Vote")
}

