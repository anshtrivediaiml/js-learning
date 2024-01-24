//IF STATEMENT
if(2 == "2") //comparison of 2 AND "2" 
//Where type of 2 is number and "2" is string still 2=="2" is considered 
//true as type wil not be checked in this 
{
    console.log("executed");
}

//The other case where the type will also be checked 
if(2 === "2") //because the triple equal checks the type also
{
    console.log(" if executed")
}
else {
    console.log("else Executed")
}

// const score=200

// if(score > 100)
// {
//     const power= Math.pow(score,2)
//     console.log(`User power: ${power}`);
// }

//shorthand notation 
const balance=1000
if(balance>500) console.log("test"),console.log("test2");

if(balance <500)
{
    console.log("less than 500")
}
else if(balance < 750)
{
    console.log("less than 750")
}
else if(balance < 950)
{
    console.log("less than 950")
}
else
{
    console.log("less than 1200")

}


//Switch Statments 
const month = 1
switch(month){

    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May");  break;
    case 6: console.log("June"); break;
}
