import  axios  from "axios";

const axiosClient = axios.create({
    baseURL: `${ import.meta.env.VITE_API_BASE }/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use(async (config) => {
    const token = "";
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        router.navigate("/login");
        throw error;
    }
);

export default axiosClient;