import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.21:3003/'
})

export default api;