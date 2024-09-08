// #object literals(we will learn object singleton after )

const mySym=Symbol()
const myObj={
    "name":"Hitesh",
    "location":"Jaipur",
    age:18,
    email:"hitesh@gmail.com",
    isLoggedIn:"false",
    // mySym:"hello",              //this will treat myObj.mySym as string
    [mySym]:"hello"         //this is the right way to use symbol in objects
}
console.log(myObj)
console.log(myObj.name)
console.log(myObj["name"])
// console.log(myObj.mySym)            //hello
// console.log(typeof myObj.mySym)     //string,not symbol

console.log(myObj[mySym])           //hello
console.log(typeof myObj[mySym])    //string

myObj.email="faisal@gmail.com"
console.log(myObj.email)
// Object.freeze(myObj)         //it freezes the attribute of object,you can't change them

myObj.email="arbaz@gmail.com"   //It will not work but doesn't give error
console.log(myObj.email)        //faisal@gmail.com 

//We can add function too
myObj.greeting=function(){
    console.log("hello my ASUS")
}
console.log(myObj.greeting)     //undefined
console.log(myObj.greeting())       //hello my ASUS]

/* 
[Function (anonymous)]      //this is the output for "console.log(myObj.greeting()) "
hello my ASUS
undefined                   //this "undefined"
*/

