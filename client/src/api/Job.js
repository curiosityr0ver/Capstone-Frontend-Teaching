import axios from 'axios';

const BACKEND_ORIGIN_URL = 'http://localhost:3000';


const fetchJobs = async () => {
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`);
        return response;
    } catch (error) {
        return error.response.data;
    }
};


export { fetchJobs };