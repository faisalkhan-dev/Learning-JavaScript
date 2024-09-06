//Stack(primitive)
//Heap(referenced  or non-primitive)

let name="Hitesh"
let anotherName=name
console.log(name)       //Hitesh
console.log(anotherName)        //Hitesh

// name="Himesh"
// console.log(name)               //Himesh
// console.log(anotherName)        //Hitesh

anotherName="Himesh"
console.log(name)               //Hitesh
console.log(anotherName)        //Himesh


let userOne={
    id:3,
    name:"Faisal"
}
let userTwo=userOne
console.log(userOne.name)       //Faisal 
console.log(userTwo.name)       //Faisal 

// userOne.name="Arbaz"
// console.log(userOne.name)       //Arbaz
// console.log(userTwo.name)       //Arbaz

userTwo.name="Arbaz"
console.log(userOne.name)       //Arbaz
console.log(userTwo.name)       //Arbaz
