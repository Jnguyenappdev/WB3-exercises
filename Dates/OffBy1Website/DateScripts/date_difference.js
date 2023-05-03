// create twp string and display the number of days between the two dates:

let startDate = new Date ("July 11, 2022")
let endDate = new Date("November 11, 2022")

let msec_per_day = 1000 * 60 * 60 * 24;

let elapsedMilliseconds = startDate.getTime() - endDate.getTime();

let dayDiff = Math.abs(elapsedMilliseconds / msec_per_day);

let numDays = Math.round(dayDiff);

console.log(`The number of days between dates is ${numDays}`)