import axios from "axios";
import ApiResource from "../../config/ApiResource";

const register = async (payload) => {
    try {
        const response = await axios.post(ApiResource.user.register, payload);
        return response.data;
    } catch (error) {
        console.error("Register failed:", error.response?.data || error.message);
        throw error;
    }
};

export { register };
