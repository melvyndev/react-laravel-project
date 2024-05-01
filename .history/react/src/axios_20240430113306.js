import  axios  from "axios";

const axiosClient = axios.create({
    baseURL: `${ import.meta.env.VITE_API_BASE }/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

aaxiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;