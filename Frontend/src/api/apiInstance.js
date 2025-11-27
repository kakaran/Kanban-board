import config from '@/config/config';
import axios from 'axios';

const instance = axios.create({
    baseURL : `${config.serverUrl}`,
    timeout :5000,
    withCredentials : true
})

export default instance