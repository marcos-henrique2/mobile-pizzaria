import axios from "axios";

const api = axios.create({
    baseURL: 'https://barber-pro-green.vercel.app'
})

export {api};