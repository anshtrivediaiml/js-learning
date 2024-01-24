//for loop 
// let num=5
// for(let i=1;i<=10;i++) //table of 5 
// { 
//     console.log(`${num} * ${i} = ${num*i}`)
// }


//While loop 
// let i=1;
// while(i>-5)
// {
//     console.log("While loop");
//     i--;
// }


//do while loop
// let testnum=0
// do{
//     console.log("num value:"+testnum)
//     testnum++;
// }while(testnum<=4)



//loops specialized for traversing through array 

//for of loop 
const arr= [1,2,3,4,5]
for (const val of arr) {
    process.stdout.write(`${val} `)
}

console.log();
const greeting="Hello Everyone!!"
for (const iterator of greeting) {
    process.stdout.write(`${iterator}`);
}

//Map is not iteratable
let map = new Map()
map.set('IN',"India")
map.set('USA',"United States of India")
map.set('UK',"United Kingdom")

// console.log(map)
for (const [key,value] of map) {
    console.log(key,":-",value);
}

const myobj={
    'Game1':"NFS",
    'Game2':"Counter Strike",
    'Game3':"Purple place"
}

// for (const [key,value] of myobj) {   //Generates
//     console.log(key,":-",value);     //an
                                     // error}

for (const key in myobj) //For in loop
{
    console.log(`${key} = ${myobj[key]}`)
}
console.log();
//For in loop
const programming=["Java","C++","Python","Javascript"]
for (const key in programming) {
    console.log(key + "--"+programming[key]);
}


//For Each loop
const coding=["JS","RUBY","CPP"]
coding.forEach( function (item){console.log(item)})
//The function given above is a callback function in for 
//each loop , a callback function doesnt have any name and
//the for each loop executes the array turn by turn

//we can also use it as follows by using arrow functions
coding.forEach( (item)=> {console.log(item);})


//Or you can also pass a function as a parameter
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

//For each loop is mainly used with array of objects 
//For example 
const myCoding=[
    {
        lang:"javascript",
        langextension:".js"
    },

    {
        lang:"java",
        langextension:".java"
    },

    {
        lang:"python",
        langextension:".py"
    }
]

myCoding.forEach((item)=>{console.log(item.lang)});