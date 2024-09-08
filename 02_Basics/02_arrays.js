const actor=["Shahrukh","Salman","Amir","Lakshya","Jamwal"]
const cricketer=["Dhoni","Kohli","Yuvraj"]
// actor.push(cricketer)
// console.log(...actor)       //Shahrukh Salman Amir Lakshya Jamwal [ 'Dhoni', 'Kohli', 'Yuvraj' ]

const newArr=actor.concat(cricketer)
console.log(...newArr)       //Shahrukh Salman Amir Lakshya Jamwal [ 'Dhoni', 'Kohli', 'Yuvraj' ]

actor.push(...cricketer)
console.log(...actor)  //Shahrukh Salman Amir Lakshya Jamwal Dhoni Kohli Yuvraj

const all=[...actor,...cricketer]
console.log(all)

const anotherArr=[1,2,3,[4,5,[6,7,8]],9,10] //Here,depth level is 3
console.log(anotherArr.flat(3)) //or you can write Infinity
 /*
 [
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
  ] 
*/

console.log(Array.isArray("Hitesh"))    //false
console.log(Array.from("Hitesh"))       //[ 'H', 'i', 't', 'e', 's', 'h' ]

let a=1,b=2,c=3
console.log(Array.of(a,b,c))    //[ 1, 2, 3 ]