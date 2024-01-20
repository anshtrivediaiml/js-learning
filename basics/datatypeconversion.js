let score="33"
console.log(typeof(score))
score= Number(score)
console.log(typeof score,"\n")


let score2="33abc"
let valueInNumber= Number(score2)
console.log(typeof valueInNumber); //will give type number
console.log(valueInNumber,"\n"); //will give value  NaN
let score3=null
let valueInNum= Number(score3)
console.log(typeof valueInNum);  //will give type object
console.log(valueInNum); //will give value  0

/* "33"=> can be easily converted into number type 33
  "33abc"=>will give NaN on writing Number(variable)
  true=>1 false=>0
  */

  let isLoggedIn = 1
  let booleanIsLoggedIn = Boolean(isLoggedIn)
  console.log("\n"+booleanIsLoggedIn)

//1=> true 2=>false
//""=>false "ansh"=>true 