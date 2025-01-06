import axios from 'axios'

const apiClient = axios.create({
    baseURL:'http://localhost:8080/',
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