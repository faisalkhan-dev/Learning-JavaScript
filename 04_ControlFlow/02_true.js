//It checks the existance of a variable.if variable has some value ,then it is true else false

//The value that is already false :
//  null,undefined,NaN,"",0,-0,BigInt->0n,false

//The value that is true :all except false
//  "0","false"," ",{},[],function(){},

const username="a"
if(username){
    console.log("username exists")      //username exists
}
else{
    console.log("username doesn't exists")
}
//****************************************************************************************************

const userName=""
if(userName){
    console.log("userName exists")
}
else{
    console.log("userName doesn't exists")      ///userName doesn't exists
}

//****************************************************************************************************
const arr=[]
if(arr.length===0){
    console.log("Array is empty")
}

//****************************************************************************************************

const emptyObject={}
console.log(Object.keys(emptyObject))   //it returns key values in an array
if(Object.keys(emptyObject).length===0){    //if array length is 0,then object is empty
    console.log("Empty object")
}

//****************************************************************************************************
console.log(false==0)       //true
console.log(false=="")      //true
console.log(0=="")          //true

//****************************************************************************************************
//Null Coalescing operator(??) :null,undefined

let val;
val=5??10
console.log(val)        //5
val=null??98
console.log(val)        //98
val=null??undefined
console.log(val)        //undefined
val=undefined??null
console.log(val)        //null

//****************************************************************************************************
//Ternary Operator 
//condition ? true :false

const price=80
price>80?console.log('high price'):console.log("Average price") //Average price