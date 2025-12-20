import axios from 'axios';

export const connection = axios.create({
    baseURL: import.meta.env.API_URL || import.meta.env.API_URL_DEV,
    withCredentials: true
})