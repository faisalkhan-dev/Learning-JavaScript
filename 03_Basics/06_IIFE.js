//Immediately invoked function  expression(IIFE)

(function greet(name){          ///NAMED IIFE
    console.log(`Hey ${name}`)
})("Faisal Khan")           //Hey Faisal Khan ,first () for declaration and second() for calling

// (function greeting(){
//     // console.log(`Hello world`)
//     const user="Hello"
//     console.log(user)       //it is not accessed because The IIFE forms a closure, which means it captures its own scope. Any variables declared inside the IIFE are part of this closure
// })() ;                           // and are not accessible outside of it. And please always try to add semicolon here.

((val) => {                     ///UNNAMED IIFE
    console.log(val);
}) (98);                    //not running,but syntax is correcta nd it should give output 98



