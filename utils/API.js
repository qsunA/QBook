import axios from 'axios';

export default axios.create({
    baseURL : 'http://localhost:3065/api',
    responseType : 'json'
})