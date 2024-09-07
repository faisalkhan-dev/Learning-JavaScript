firstName="Faisal"
lastName="Khan"
id=32
console.log(`Hello my name is ${firstName} ${lastName} and ${id}`)

const name=new String('Hitesh')
console.log(name)

console.log(name[0])                //H
console.log(name._proto_)           //undefined
console.log(name.length)            //6
console.log(name.toUpperCase())     //it does not change original data
console.log(name)                   //[String:'Hitesh']
console.log(name.charAt(4))         //s
console.log(name.indexOf('i'))      //1

const newName=name.slice(0,4)       //Hite ,don't change the original string
console.log(newName)

const newNamee=name.slice(-6,3)     //Hit
console.log(newNamee)

console.log(name.substring(-6,2))   //Hi [0,1]indices because substring treat -ve indices as 0.

//*********************************************************************************************************************

let obj = {};
let proto = {greet: () => console.log('Hello')};

obj.__proto__ = proto;

obj.greet(); // Output: Hello

// In this example, obj inherits the greet method from proto through its .__proto__ link.

//*********************************************************************************************************************