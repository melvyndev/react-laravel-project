import  axios  from "axios";

const axiosClient = axios.create({
    baseURL: `${ import.meta.env.VITE_API_BASE }/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;