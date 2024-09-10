var c=400
if (true){
    let a=10
    const b=20
    var c=30
}
//console.log(a)      //a is not defined
//console.log(b)        //b is not defined
console.log(c)      //30

//Variables declared with var are function-scoped, meaning they are confined to the function
// in which they are declared.

function myFunction() {
    var x = 10; // x is local to myFunction
    console.log(x); // 10
}
myFunction();
console.log(x); // Error: x is not defined (because x is function-scoped)



console.log(hoistedVar); // undefined (hoisted but not initialized)
var hoistedVar = 5;
console.log(hoistedVar); // 5

