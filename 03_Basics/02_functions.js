function calculateCartPrice(...num){    //Here,... is called rest operator
    return num
}
console.log(calculateCartPrice(200,300,400));

function calculateItemsPrice(val1,val2,...num){    //Here,... is called rest operator
    return num
}
console.log(calculateItemsPrice(200,300,400,600));  //[ 400, 600 ]

//Handling object in functions

const user={
    username:"Faisal Khan",
    id : 75
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and id is ${anyObject.id}`);
}
handleObject(user);              //Username is Faisal Khan and id is 75

handleObject(
    {
        username:"Hitesh",
        id:76
    }
)                               //Username is Hitesh and id is 76
