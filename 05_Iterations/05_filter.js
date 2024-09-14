const nums=[1,2,3,4,5,6,7,8,9,10]
//const filteredResult=nums.filter((val)=>(val>5))

// const filteredResult=nums.filter((val)=>{
//     val>5                                       //[],empty array because if you create scope,you need to add return
// })

const filteredResult=nums.filter((val)=>{
    return val>5                                       //[ 6, 7, 8, 9, 10 ]
})

console.log(filteredResult)                         //[ 6, 7, 8, 9, 10 ]

//****************************************************************************************************

const languages = [
    { name: "Java", popularity: 8 },
    { name: "Python", popularity: 10 },
    { name: "C++", popularity: 7 },
    { name: "Ruby", popularity: 6 },
    { name: "JavaScript", popularity: 10 },
    { name: "BhaiLang", popularity: 5 }
  ];

//   const popularlanguages=languages.forEach((lang)=>{return lang.popularity==10}) //forEach method doesn't return anything
//   console.log(popularlanguages) 

  
  const popularlanguages=languages.filter((lang)=>{return lang.popularity==10})
  console.log(popularlanguages)     //{ name: 'Python', popularity: 10 },
                                    //{ name: 'JavaScript', popularity: 10 }
  
  


