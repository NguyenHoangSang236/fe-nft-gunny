import axios from "axios";
import ApiResource from "../../config/ApiResource";

const login = async (username, password) => {
    try {
        const response = await axios.get(ApiResource.user.login, {
            params: { user_name: username, password },
        });
        return response.data;
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        throw error;
    }
};

export { login };
