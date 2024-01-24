const userEmail = "anshtrivedi85@gmail.com"

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("We didnt get user Email");
}

/*Falsy values 
 false,0, -0, BigInt 0n, "",null,undefined,NaN

 Truthy values 
"0",'false'," ",[],{}, function(){} -empty function,
*/

//Nullish Coalescing operator(??): null undefined
// let val1;
// val1 = 5 ?? 10; //5 is assigned to val1
// val1= null ?? 10 //10 is assigned to val1
// val1= undefined ?? 10 //10 is assigned to val1 
// console.log(val1)


//Ternary operator
const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("more than 80") : console.log("less than 80");

