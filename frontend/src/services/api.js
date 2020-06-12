import axios from 'axios';

const api = axios.create({
    baseURL:'http://api.mathjs.org/v4/'
});

export default api;