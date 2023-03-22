'use strict';

let today = prompt("What day is is today");
// console.log("Today is " + today + ". The workout schedule is as follows");
let todaysWorkout = "";
let workout;

    // console.log(workout);



switch (today) {
  case "Monday":
    todaysWorkout = "5 minutes Warmup, 5km Run , Log you weight, Take photos for comparison";
    // console.log("5 minutes Warmup, 5km Run");
    // console.log("Log you weight");
    // console.log("Take photos for comparison");
    workout = 
              `Today is ${today}, and the workout is as follows.
              ${todaysWorkout}.`
    console.log(workout);
    break;
  case "Tuesday":
    console.log("5 minutes Warmup, Shoulders, Biceps, Triceps");
    break;
  case "Wednesday":
    console.log("5 minutes Warmup, core, legs, chest");
    break;
  case "Thursday":
  case "Friday":
    console.log("5 minutes Warmup, walk for 5km");
    break;

  default:
        console.log("Wrong input, enter the day of the week");

    break;
}


