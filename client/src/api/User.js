import axios from 'axios';

const BACKEND_ORIGIN_URL = 'http://localhost:3000';


const Login = async (email, password) => {
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/login`, { email, password });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const Register = async (name, email, password) => {
    try {
        const response = await axios.post('user/register', { name, email, password });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export { Login, Register };