import apiCall from "./apiCall";
import { STUDY_METHOD } from "./constants";
const axiosRequest = require("axios");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//prompt function returns a promise, so, i can use async with them
const prompt = (query) => new Promise((resolve) => rl.question(query,resolve));

console.log("Promisses study");
console.log("welcome!");

//IIFE, avaiable in node >14
(async() => {
    try{
        const target = await prompt("Are you testing for API or ERROR?")
        console.log(`OK. ${target} it is!`);
        const method = await prompt("Which METHOD?\n 1 = ASYNC and AWAIT\n 2 = THEN and CATCH ")
        const [url,studyMethod] = checkTarget(target,method);
        console.log("Chosen URL:",url);
        console.log("Chosen Methed:",method);
        rl.close();
        // runApi(url);
        apiCall(studyMethod,url)
    }catch(e){
        console.error("error while prompting",e)
    }
})();

// rl.on("close",() => process.exit(0))

const checkTarget = (target,method) => {
    let 
        url = "",
        studyMethod;
    if (method === 1){
        studyMethod =  STUDY_METHOD.ASYNC_AWAIT
    }else if( method === 2){
        studyMethod = STUDY_METHOD.THEN_CATCH
    }else{
        studyMethod = studyMethod.ASYNC_AWAIT
    }

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
    return [url, studyMethod]
};


