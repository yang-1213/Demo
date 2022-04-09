import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance = axios.create({
    baseURL: "https://api.github.com",
    timeout: 10000,
})

export default instance
export const Get = (url: string, data: object = {}) => {
    return instance.get(url, { params: data })
}
export const Post = (url: string, data: object = {}) => {
    return instance.post(url, data)
}
