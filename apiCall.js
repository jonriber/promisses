const axiosRequest = require("axios");

const apiCall = (method,url,) => {
    axiosRequest.get(url)
    .then(response => {
        console.log("response:",response.data.activity)
    })
    .catch(error => {
        console.log("error:",error)
    });
};

export default apiCall;