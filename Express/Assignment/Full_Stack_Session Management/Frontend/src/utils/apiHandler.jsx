import axios from "axios";
const apiURL = 'http://localhost:3000'

export const postRegister = async (path, data) =>{
    const response = await axios.post(`${apiURL}/${path}`, data);
    return response.data;
}

export const postLogin = async (path, data) =>{
    const response = await axios.post(`${apiURL}/${path}`, data);
    return response.data;
}

export const createNote = async (path, data) =>{
    const response = await axios.post(`${apiURL}/${path}`, data);
    return response.data;
}