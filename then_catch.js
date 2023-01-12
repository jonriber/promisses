const axiosRequest = require("axios");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Promisses study");
console.log("welcome!");

rl.question("testing api or erro?",(target) => {
    console.log(`target is: ${target}`);
    const userChoice = target;
    rl.close()
});


if(userChoice === "api"){
    axiosRequest.get("http://www.boredapi.com/api/activity")
    .then(response => {
        console.log("response:",response.data.activity)
    })
    .catch(error => {
        console.log("error:",error)
    });
}else if(userChoice === "error"){
    axiosRequest.get("http://httpstat.us/404")
    .then(response => {
        console.log("response:",response.data.activity)
    })
    .catch(error => {
        console.log("error:",error)
    });
}else{
    console.log("default case!")
};
//then or catch to see the result of it

