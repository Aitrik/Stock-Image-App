import axios from "axios"

const adminUrl="https://api.unsplash.com"

export const baseURL=adminUrl

const axiosInstance=axios.create({
    baseURL,
})

export default axiosInstance