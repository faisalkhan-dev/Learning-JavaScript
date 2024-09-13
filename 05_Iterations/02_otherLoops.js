//Objects are not iterable using for of loop
//****************************************************************************************************
const arr=[1,2,3,4,5,6,7,8,9,10]
for(const num of arr){
    //console.log(num)        //1,2,3,4,5,6,7,8,9,10
}

//****************************************************************************************************

const greeting="Hello World"
for(const greet of greeting){
   // console.log(greet)      //H,e,l,l,o, , W,o,r,l,d
}

//****************************************************************************************************

const map=new Map()     //It is an object contain only distinct key-value pairs
map.set("IN","India")
map.set("USA","United states of America")   
map.set("UK","united Kingdom")
map.set("IN","India")

console.log(map)
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United states of America',
//     'UK' => 'united Kingdom'
//   }

for(const val of map){
    console.log(val)
}

// [ 'IN', 'India' ]
// [ 'USA', 'United states of America' ]
// [ 'UK', 'united Kingdom' ]

for(const [key,value] of map){      //Here,we had destructuring of key and value
    console.log(key, "->",value)
}

// IN -> India
// USA -> United states of America
// UK -> united Kingdom

//****************************************************************************************************

