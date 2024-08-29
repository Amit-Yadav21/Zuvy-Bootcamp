import axios from "axios";
const apiURL = 'http://localhost:3000'
axios.defaults.withCredentials=true


export const postRegister = async (path, data) => {
    try {
        const response = await axios.post(`${apiURL}/${path}`, data);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; 
    }
}

export const postLogin = async (path, data) => {
    try {
        const response = await axios.post(`${apiURL}/${path}`, data);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; 
    }
};

export const createNote = async (path, data) => {
    try {
        const response = await axios.post(`${apiURL}/${path}`, data);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; 
    }
}