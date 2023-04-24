import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_API
    // baseURL: "http://localhost:8080"
})