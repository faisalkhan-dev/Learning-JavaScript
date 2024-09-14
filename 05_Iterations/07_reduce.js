const nums=[1,2,3,4,5,6,7,8,9,10]
const result=nums.reduce(
    function(acc,callval){
        console.log(`acc: ${acc} and callval: ${callval} `)
        return acc+callval                                      //this is like acc=acc+callval where callval is arr[i]
    },0                                                          //acc initialised as 0
)

//console.log(result)                                       //55,without arrow function

const res=nums.reduce((acc,callval)=>(acc+callval),0)       //55,reduce using arrow function
console.log(res)



// acc: 0 and callval: 1 
// acc: 1 and callval: 2 
// acc: 3 and callval: 3 
// acc: 6 and callval: 4 
// acc: 10 and callval: 5 
// acc: 15 and callval: 6 
// acc: 21 and callval: 7 
// acc: 28 and callval: 8 
// acc: 36 and callval: 9 
// acc: 45 and callval: 10 
// 55