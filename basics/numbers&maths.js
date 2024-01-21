const score = new Number(400)
console.log(score);
console.log(score.toString().length);
console.log(score.toFixed(2)); //displays 400.00

const otherNumber= 23.8966
console.log(otherNumber.toPrecision(3)) //Displays 23.9

const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN')); //DISPLAYS 10,00,000

console.log(Number.MIN_VALUE); //Ised to know the lowest nummber that can be used
console.log(Number.MAX_VALUE); //Used to know the highest number that can be used 

//+++++++++++++++++++++++++++++++ Maths +++++++++++++++++//
 
console.log(Math.abs(-45)); //45
console.log(Math.round(4.956));
console.log(Math.min(4,45,8,2,-99,-12));
console.log(Math.max(34,55,50,1,99));
console.log(Math.ceil(4.6)); //displays 5
console.log(Math.floor(4.3)); //display 4

console.log(Math.random()); //displays any random number between 0 and 1
console.log(Math.random()*10) //Moves the random number one point to the left side as it is
//multiplied with 10 

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min) //displays any value between 10 and 20 

