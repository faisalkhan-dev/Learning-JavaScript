//Map is not iterable
const user={
    username:"Faisal Khan",
    id:9009,
    isLoggedIn:true,
    gmail:"javascript@gmail.com"
}

// for(const val of user){
//     console.log(val)        //user is not iterable,as objects are not iterable using for-of loop
// }

for(const val in user){             //username
    console.log(val)                //id
}                                   //isLoggedIn
                                    //gmail

for(const val in user){             
    console.log(val ," and ",user[val])                
} 

// username  and  Faisal Khan
// id  and  9009
// isLoggedIn  and  true
// gmail  and  javascript@gmail.com

//****************************************************************************************************

const map=new Map()     //It is an object contain only distinct key-value pairs
map.set("IN","India")
map.set("USA","United states of America")   
map.set("UK","united Kingdom")
map.set("IN","India")

for (const key in map) {
     console.log(key)       //not work for map
}











