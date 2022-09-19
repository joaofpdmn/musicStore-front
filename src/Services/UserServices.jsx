import axios from "axios";

const APIprefix = 'http://localhost:5000';

function loginRequest(body){
    return axios.post(`${APIprefix}/login`, body);
}
function signUpRequest(body){
    return axios.post(`${APIprefix}/signup`, body);
}
function getProducts(){

   

    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const promise=axios.get(`${APIprefix}/list`, config);

    return promise;
}
function getSearch(e){

    

    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const promise=axios.get(`${APIprefix}/list/${e}`, config);

    return promise;
}
function checkoutRequest(body){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return axios.post(`${APIprefix}/checkout`, body, config);
}

export { 
    loginRequest,
    signUpRequest,
    getProducts,
    getSearch,
    checkoutRequest
}