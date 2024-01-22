const a=10
let b=20 
var c=30
if(true)
{
 let b=200 //block level scope
  var c=300 //global scope
}

console.log(a,b,c);

if(true){
    const username= "ansh"
    if(username === "ansh")
    {
        const website=" youtube"
        console.log(username+website);
    }
    // console.log(website); //generates an error

}

// console.log(username); //generates an error


// console.log(Addtwo(2)) //generates an error as function is defined in the next line
const Addtwo= function(num) //function can be assigned to a variable also
{
    return num+2;
}

let testnum= Addtwo(5)
console.log(testnum) //prints 7

