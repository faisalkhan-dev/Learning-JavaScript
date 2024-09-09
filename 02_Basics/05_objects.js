const course={
    coursename:"JS In Hindi",
    price:"998",
    courseInstructor:"Hitesh"
}
// Destructuring of Objects
const {coursename}=course
console.log(coursename)     //JS In Hindi
const {courseInstructor:CI}=course  //CI is the short name you are giving to courseInstructor
console.log(CI)             //Hitesh


//JSON format
/*
{
    "time": {
        "updated": "Sep 9, 2024 17:58:33 UTC",
        "updatedISO": "2024-09-09T17:58:33+00:00",
        "updateduk": "Sep 9, 2024 at 18:58 BST"
    },
    "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    "chartName": "Bitcoin",
    "bpi": {
        "USD": {
            "code": "USD",
            "symbol": "&#36;",
            "rate": "56,530.707",
            "description": "United States Dollar",
            "rate_float": 56530.7074
        },
        "GBP": {
            "code": "GBP",
            "symbol": "&pound;",
            "rate": "43,171.314",
            "description": "British Pound Sterling",
            "rate_float": 43171.3141
        },
        "EUR": {
            "code": "EUR",
            "symbol": "&euro;",
            "rate": "51,167.3",
            "description": "Euro",
            "rate_float": 51167.3
        }
    }
}
*/
