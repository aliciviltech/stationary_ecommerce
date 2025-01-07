import axios from 'axios'
import dotenv from 'dotenv'
// dotenv.config()

// const BASE_URL = process.env.BASE_URL
const apiClient = axios.create({
    baseURL: 'https://stationary-ecommerce-backend-o53w.vercel.app',
    timeout:3000,
    headers:{
        "Content-Type": "application/json"
    }
})

apiClient.interceptors.response.use((res)=>{
    return res;
}, (error)=>{
    return error
})

export default apiClient