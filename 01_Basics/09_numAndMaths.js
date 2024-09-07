const score=400
console.log(score)      //400

const balance=new Number(100)      
console.log(balance)                //[Number: 100]
console.log(balance.toString().length)  //3
console.log(balance.toFixed(3))         //100.000

const num=1234.5678
console.log(num.toPrecision(3))     //1.23e+3
console.log(num.toPrecision(4))     //1235
console.log(num.toPrecision(5))     //1234.6
console.log(num.toPrecision(6))     //1234.57
console.log(num.toPrecision(7))     //1234.568

const newNum=10000000000
console.log(newNum.toLocaleString("en-US"))    //10,000,000,000
console.log(newNum.toLocaleString("en-IN"))    //10,00,00,00,000

//*********************************************************************************************************************

console.log(Math.abs(-3))
console.log(Math.round(4.6))
console.log(Math.ceil(4.1))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.1))
console.log(Math.floor(4.6))

console.log(Math.max(3,1,4,6,2))
console.log(Math.min(3,1,2,34,4))

console.log(Math.random())      //It always give values between 0 to 1

//To get values between min and max (as dice)
const min=1
const max=6
console.log(Math.floor(((Math.random()*(max-min+1))+min)))