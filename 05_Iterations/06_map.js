const nums=[1,2,3,4,5,6,7,8,9,10]
const result=nums.map((num)=>(num*5))
                 .filter((num)=>num%2==0)

console.log(result)     //[ 10, 20, 30, 40, 50 ]