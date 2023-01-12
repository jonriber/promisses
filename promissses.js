const axiosRequest = require("axios");

console.log("Promisses study");

let response = axiosRequest.get("http://www.boredapi.com/api/activity");

//try to see the result of it

console.log("response:",response);