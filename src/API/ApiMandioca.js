import axios from 'axios'

const ApiMandioca = axios.create({
    baseURL: "http://api.github.com",
})

export default ApiMandioca