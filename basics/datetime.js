//Dates 
let mydate= new Date()
console.log(mydate.toDateString()) //displays the current date with the month and day
console.log(typeof mydate) //object type
console.log((new Date(2024,0,1,12,0)).toLocaleString()); //displays time 12:00:00 pm and date 1/1/24

console.log(mydate.getMonth())
console.log(mydate.getFullYear())
console.log(mydate.getTimezoneOffset());