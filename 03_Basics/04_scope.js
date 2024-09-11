//Inner function can access outer function but outer function can't.

function one(){
    const userName="Hitesh"
    function two(){
        const newName="Faisal"
        console.log(userName)
    }
    //console.log(newName)
    two()
}
one()       //Hitesh

//****************************************************************************************************

if(true){
    const user="Hello"
    if(user=="Hello"){
        const website="youtube"
        console.log(user + website) 
    }
    //console.log(website)      give error
}
//console.log(user)    give error

//****************************************************************************************************

console.log(addOne(5))  //6
function addOne(num){       //function
    return num+1
}


console.log(addTwo(7))      //error given
const result=function addTwo(value){        //Expression
    return value+2
}

//function can be called before function declaration but expression can't be declared before expression declaration
