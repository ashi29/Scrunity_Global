import axios from "axios";

const API_URL = "http//localhost:8080/api/auth/";
 
const register = (id,name,username,password,number)=> {
    return axios.post(API_URL + "signup",{
        id,name,username,password,number
    });
};

const login = (username,password) => {
    return axios.post(API_URL + "signin", {
        username,password
    }).then((response)=>{
        if(response.data.accessToken)
        {
            localStorage.setItem("user",JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {login,register,logout};