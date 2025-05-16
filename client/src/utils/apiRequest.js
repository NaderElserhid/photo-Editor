import axios from "axios";

// the api fun
const apiRequest = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT
});

export default apiRequest;