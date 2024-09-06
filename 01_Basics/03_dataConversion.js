num=3
console.log(typeof num)
num=String(num)
console.log(typeof num)
num=Boolean(num)
console.log(typeof num)
num=Object(num)
console.log(typeof num)

a="abc34"
a=Number(a)
console.log(typeof a)   //number
console.log(a)          //Nan

b=null
a=Number(b)
console.log( "Important " +typeof b)   //object
console.log(b)          //null

c=undefined
c=Number(c)
console.log(typeof c)   //number
console.log(c)          //Nan

// d=true
// e=false
// d=Number(d)
// e=Number(e)
// console.log(d)          //1
// console.log(e)          //0

d=true
e=false
d=String(d)
e=String(e)
console.log(d)          //true
console.log(e)          //false

console.log(Boolean(1))     //true
console.log(Boolean(2))     //true
console.log(Boolean(0))     //false


