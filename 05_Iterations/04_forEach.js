const arr=["Java","Python","C++","Ruby","JavaScript","BhaiLang"]
arr.forEach(function(val){
    console.log(val)
})

arr.forEach((val)=>{console.log(val)})

function print(val){
    console.log(val)
}
//arr.forEach(print())    //give error because In JavaScript, when you pass a function as an argument, you should pass the function reference itself,
                        // not its result (which happens when you use parentheses ()).

arr.forEach(print)      //Here,we are passing reference,not function that's why no error

const programmingLanguage=[
    {
        language:"Java",
        file:"java"
    },
    {
        language:"JavaScript",
        file:"js"
    },
    {
        language:"Python",
        file:"py"
    }
]
programmingLanguage.forEach((item)=>{
    console.log(item.language)
})