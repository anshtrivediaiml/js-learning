//object literals
const mySym= Symbol("key1")
const JSUser={
    name:"Ansh",
    age:19,
    [mySym]:"mykey1", //adding a symbol to an object
    location:"Vadodara",
    email:"anshtrivedi85@gmail.com",
    isloggedin:false,
    lastloginDays:["Monday","Saturday"]
}

//Any value can be accessed through two methods
console.log(JSUser.email)
console.log(JSUser["email"])

console.log(JSUser[mySym])
//How to change any field of an object
JSUser.email ="trivediansh119@gmail.com"
console.log(JSUser["email"])
//Object.freeze(JSUser) //now the field is fixed and cannot be changed
//JSUser["email"]="kuchbhi@gmail.com" //wont be change as email field is freezed
console.log(JSUser)

JSUser.greeting= function () {
    console.log("Hello JS User")
}

console.log(JSUser.greeting) //undefined
console.log(JSUser.greeting()) //executes the function 



//Singleton Object
const tinderUser = new Object()
tinderUser.id="22AIML056"
tinderUser.name="Ansh"
tinderUser.isloggedin=false
console.log(tinderUser);

//Objects inside another object
const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ansh",
            lastname:"Trivedi"
        }
    }

}
 
console.log(regularUser.fullname.userfullname.firstname) //displays Ansh
console.log(regularUser)

let obj1={1:"a",2:"b"}
let obj2={3:"c",4:"d"}

let obj3 = Object.assign(obj1,obj2)
console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedin')) //checks if the object tinderUser has islogged in property




//part 3 
const course ={
    coursename:"JS",
    price:"999",
    courseinstructor:"ansh"
}

const {courseinstructor:instructor} =course
console.log(instructor)