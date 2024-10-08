//For loops,break and continue,do while

for (let i = 0; i <=10; i ++) {
    console.log(i)
}

//****************************************************************************************************

for(let j=1;j<=10;j++){
    if(j%2==0){
        continue
    }
    console.log(j)          //1,3,5,7,9
}

//****************************************************************************************************

for(let k=1;k<=10;k++){
    if(k>5){
        break                   //if k>5,then it will throw completely out of loop
    }
    console.log(k)          //1,2,3,4,5
}

//****************************************************************************************************

for(let m=1;m<=10;m++){
    if(m%2==0){
        continue                  //if m%==0,it will throw to loop for iteration
    }
    console.log(m)          //1,3,5,7,9
}

//****************************************************************************************************

let num=1
while(num<=10){
    console.log(num)    //1,2,3,4,5,6,7,8,9,10
    num++
}

//****************************************************************************************************

let value=10
do{
    console.log(value)
    value++
}while(value<=15)   //10,11,12,13,14,15

//****************************************************************************************************

let value2=10
do{
    console.log(value2)     //10,do will execute atleast one time then start increment and check condition
    value2++
}while(value<1)   





