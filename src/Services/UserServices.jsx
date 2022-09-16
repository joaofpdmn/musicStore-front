import axios from "axios";

const APIprefix = 'https://music-store-driven.herokuapp.com';

function loginRequest(body){
    return axios.post(`${APIprefix}/login`, body);
}

function signUpRequest(body){
    return axios.post(`${APIprefix}/signup`, body);
}

export { 
    loginRequest,
    signUpRequest,
}
