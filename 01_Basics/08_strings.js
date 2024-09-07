const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

//they will give differet result when eval() method called

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2

//*********************************************************************************************************************


let name="  Faisal   Khan   "
console.log(name.trim())    //Faisal khan ,to remove spaces from first and last and doesn't change the original content
console.log(name)           //   Faisal Khan ,content is same after running trim function too

let newName=name.replace('Faisal','Arbaz')
console.log(newName.trim())     //Arbaz Khan

console.log(name.includes('Faisal'))        //true

let mark=Symbol('123')
console.log(String(mark))       //Symbol(123)
console.log(mark.toString())    //Symbol(123)

//*********************************************************************************************************************

let anotherName='Hitesh-sir-chai-aur-code'

console.log(anotherName.split('-')) // [ 'Hitesh', 'sir', 'chai', 'aur', 'code' ] ,
//                                      It will split each part at - and return them in an array

// The split() method in JavaScript is used to split a string into an array of substrings, based on a specified separator. 
// The method does not change the original string but returns a new array.

// Syntax:
// string.split(separator, limit)
// separator (optional): Specifies the character, regular expression, or string to split the string at. If omitted, the entire string will be returned in the array.
// limit (optional): Specifies the number of splits or substrings to return.

//*********************************************************************************************************************