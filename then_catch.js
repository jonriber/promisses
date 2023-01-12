const axiosRequest = require("axios");

console.log("Promisses study");

axiosRequest.get("http://www.boredapi.com/api/activity")
    .then(response => {
        console.log("response:",response.data.activity)
    })
    .catch(error => {
        console.log("error:",error)
    });

//then or catch to see the result of it

