// 1. Shallow Copy:
// A shallow copy makes a new object, but if the original object has other objects inside it, it just copies the references to
//  those inner objects.
// This means changes made to inner objects in the copied version will also affect the original version.

// 2. Deep Copy:
// A deep copy makes a completely new object, including any objects inside. So, changes made to the copied version 
// do not affect the original at all.

const myArr=[2,1,3,5,6,9,8]
console.log(myArr[0])
console.log(typeof myArr)   //object
myArr.push(10)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(0) //Insert 0 in first
console.log(myArr)
myArr.shift()   //Removes the first element from an array and returns it.
                // If the array is empty, undefined is returned and the array is not modified.

console.log(myArr.includes(3))  //true
console.log(myArr.indexOf(2))   //0

const arr=myArr.join()  //The join() method in JavaScript is used to combine all the elements of an array into a single string.
console.log(arr)            //2,1,3,5,6,9,8
console.log(typeof  arr)    //string

console.log(myArr.join('-'))    //2-1-3-5-6-9-8 ,parameter in join method is called separator

console.log(myArr.slice(1,4))       //[1,2,5]
console.log(typeof myArr.slice(1,4))        //object
console.log(myArr)                          //[2,1,3,5,6,9,8]

//slice():
// Purpose: Extracts a portion of an array without modifying the original array.
// Returns: A new array containing the selected elements.
// Does not modify the original array.

console.log(myArr.splice(1,4))      //[1,3,5,6]
console.log(typeof myArr.splice(1,4))   //object
console.log(myArr)                      //[ 2 ]

// splice():
// Purpose: Adds, removes, or replaces elements in the original array.
// Returns: An array containing the removed elements.
// Modifies the original array.

//SYNTAX:
/*array.splice(start, deleteCount, item1, item2, ...)
start: The index at which to start changing the array.
deleteCount: The number of elements to remove. If 0, no elements are removed.
item1, item2, ... (optional): Elements to add to the array starting at start index.
*/

//****************************************************************************************************


/*
Key Differences:
slice(): Creates a new array with extracted elements; does not modify the original array.
splice(): Changes the original array by adding, removing, or replacing elements.
*/

//****************************************************************************************************

