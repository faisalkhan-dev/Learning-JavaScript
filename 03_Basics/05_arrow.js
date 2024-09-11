const user={
    username:"Faisal Khan",
    price:98,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to our website`)
    }
}
user.welcomeMessage()   //Faisal Khan ,welcome to our website
user.username="Sadie"
user.welcomeMessage()   //Sadie ,welcome to our website

console.log(this)       //{} ,you are inside Node environment and open window{} in browser

//**************************************************************************************************************

function check(){
    console.log(this)
}
check()         //it will give more value as global object

//**************************************************************************************************************

function checking(){
    const username="Professor"
    console.log(this.username)
}
checking()      //undefined ,because we can't use this inside function

//**************************************************************************************************************

const name=(nameUser)=>{
    console.log(nameUser)
    console.log(this)               //{}
}
name("ArbazKhan")       //ArbazKhan

//**************************************************************************************************************

const add=(num1,num2) => (num1+num2)
console.log(add(6,7))               //13

const checkObject=() => ({username:"Lakshya",id:89})
console.log(checkObject())                              //{ username: 'Lakshya', id: 89 }
