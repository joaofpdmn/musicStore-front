import axios from "axios";

const APIprefix = 'http://localhost:5000';

function loginRequest(body){
    return axios.post(`${APIprefix}/login`, body);
}

function signUpRequest(body){
    return axios.post(`${APIprefix}/signup`, body);
}

function checkoutRequest(body){
    return axios.post(`${APIprefix}/checkout`, body);
}

export { 
    loginRequest,
    signUpRequest,
}
