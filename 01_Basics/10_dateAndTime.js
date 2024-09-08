const date=new Date();
console.log(date.toString())        //Sun Sep 08 2024 16:05:40 GMT+0530 (India Standard Time)
console.log(date.getDate())         //8
console.log(date.toISOString())     //2024-09-08T10:38:23.478Z
console.log(date.toDateString())    //Sun Sep 08 2024
console.log(date.toJSON())          //2024-09-08T10:38:23.478Z
console.log(date.toLocaleString())  //8/9/2024, 4:08:23 pm
console.log(date.getTimezoneOffset())   //-330 (India time zone is 5:30(UTC+5.5) means ahead than greenwich time)

//Month start from 0 in JavaScript
const newDate=new Date(24,0,11)         
console.log(newDate.toString())         //Fri Jan 11 1924 00:00:00 GMT+0530 (India Standard Time)..Friday because on this day
                                        //Gregorian calender Friday is.
const anotherDate=new Date('2011-01-05')         
console.log(anotherDate.toString())     //Wed Jan 05 2011 05:30:00 GMT+0530 (India Standard Time),Here if you give parameter
                                        //in String then (Jan->01) but in normal (jan->0)

let myTimeStamp=Date.now()
console.log(myTimeStamp)        //1725792858201 ,in ms
console.log(myTimeStamp/1000)   //1725792858.201 ,in sec
console.log(Math.floor(myTimeStamp/1000))       //1725792858 