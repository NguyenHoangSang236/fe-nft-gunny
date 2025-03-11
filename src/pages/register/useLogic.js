import { useNavigate } from "react-router-dom";
import { register } from "./api";

export default () => {
    const navigate = useNavigate();

    const handleRegister = async (values, { setSubmitting }) => {
        try {
            delete values.cfmPassword;
            console.log('Registration values:', values);

            const response = await register(values);
            
            if (response && response.status === 200) {
                alert("Register successfully");
                handleRedirectToLogin();
            }
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleRedirectToLogin = () => {
        navigate('/login');
    };

    return {handleRedirectToLogin, handleRegister};
}