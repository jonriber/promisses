const axiosRequest = require("axios");

const apiCall = (method,url,) => {
    if(method === 1){
        //async and await method
        //need to call an async method
       getActivity(url).then(data => console.log("data:",data));
    }else if(method === 2){
        //then and catch method
    axiosRequest.get(url)
        .then(response => {
            console.log("response:",response.data.activity)
        })
        .catch(error => {
            console.log("error:",error)
        });
    }
};

async function getActivity(url){
    //if i want to return something, it will bea Promise
    try{
        let apiResponse = await axiosRequest.get(url);
        return apiResponse
    }catch (error){
        console.error("error:",error)
    }   
};

export default apiCall;