const d = new Date();
// d created at time of current date and time if not specified

console.log(d.toString());
//Tue May 02 2023 15:45:57 GMT-0400 (Eastern Daylight Time)

console.log(d.toDateString());
//Tue May 02 2023

console.log(d.toUTCString());
// UTC and GMT are same thing essentially
//Tue, 02 May 2023 19:45:57 GMT

console.log(d.toLocaleString());
//gived format that is appropriate
//5/2/2023, 3:45:57 PM





