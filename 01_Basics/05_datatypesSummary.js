// Primitives:
// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

// Non-primitives(Referenced type):
// Array,objects,Functions

let userMail; 
console.log(userMail)       //Undefined

const id=Symbol('123')      //Symbol use to make unique .Here, id and userId have same values still they are unique.
const userId=Symbol('123')

console.log(id)     //Symbol(123)
console.log(userId) //Symbol(123)
console.log(id===userId)    //false

// Symbol is a built-in object whose constructor returns a symbol primitive — also called a 
// Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add 
// unique property keys to an object that won't collide with keys any other code might add to the object, 
// and which are hidden from any mechanisms other code will typically use to access the object. 
// That enables a form of weak encapsulation, or a weak form of information hiding.
//It is immutable

const bigInteger=7467624687278346742n

const idno=[1,2,3,4,5]    //Array
const student={
    id:1,                           //objects  i.e mutable
    name:"faisal Khan"
}
const myFunction=function(){
    console.log("I am function")
}
console.log(typeof idno)        //object
console.log(typeof student)     //object
console.log(typeof myFunction)  //function
