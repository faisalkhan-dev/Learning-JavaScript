const user=new Object() //Singleton object
const newUser={}        //Non-singleton object
console.log(user)       //{}
console.log(newUser)    //{}

newUser.id="982b"
newUser.name="Hitesh"
newUser.isLoggedin=false
console.log(newUser)        //{ id: '982b', name: 'Hitesh', isLoggedin: false }
console.log(Object.keys(newUser))       //[ 'id', 'name', 'isLoggedin' ] , return array
console.log(Object.values(newUser))     //[ '982b', 'Hitesh', false ]
console.log(Object.entries(newUser))    //[ [ 'id', '982b' ], [ 'name', 'Hitesh' ], [ 'isLoggedin', false ] ] , array in array
console.log(Object.hasOwnProperty("name"))  ///true
//****************************************************************************************************

const anotherUser={
    email:"abc@gmail.com",
    fullname:{
        firstname:"Faisal",
        lastname:"Khan"
    }
}
console.log(anotherUser.fullname.firstname)     //Faisal

//****************************************************************************************************


const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:'f'}
const obj3={obj1,obj2}
console.log(obj3)       /*
{
    obj1: { '1': 'a', '2': 'b', '3': 'c' },
    obj2: { '4': 'd', '5': 'e', '6': 'f' }
} 
*/
const obj4=Object.assign({},obj1,obj2)
console.log(obj4)                       //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' },Here {} is the target

//****************************************************************************************************

//Array of objects

const users=[
    {
        name:"Faisal Khan",
        id:"23fa43"
    },
    {
        name:"Arbaz Khan",
        id:"32ar23"
    },
    {
        name:"Hitesh sir",
        id:"43hi54"
    }
]
console.log(users[1].name)      //Arbaz Khan











