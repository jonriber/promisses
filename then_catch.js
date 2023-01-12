const axiosRequest = require("axios");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const prompt = (query) => new Promise((resolve) => rl.question(query,resolve));

console.log("Promisses study");
console.log("welcome!");

(async() => {
    try{
        const target = await prompt("Are you testing for API or ERROR?")
        console.log(`OK. ${target} it is!`);
        var url = checkTarget(target);
        console.log("Chosen URL:",url);
        rl.close();
        runApi(url);
    }catch(e){
        console.error("error while prompting",e)
    }
})();

// rl.on("close",() => process.exit(0))

const checkTarget = (target) => {
    let url = ""
    switch(target){
        case "API":
        case "api":
        case "Api":
            url = "http://www.boredapi.com/api/activity"
            break
        case "Error":
        case "ERROR":
        case "Error":
            url = "https://httpstat.us/404"
        default:
            url = "https://httpstat.us/404"
    };
    return url
};

const runApi = (url) => {
    axiosRequest.get(url)
    .then(response => {
        console.log("response:",response.data.activity)
    })
    .catch(error => {
        console.log("error:",error)
    });
};
//applying then and catch


//then or catch to see the result of it

