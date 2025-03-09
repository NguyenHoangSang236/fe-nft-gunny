import { useNavigate } from "react-router-dom";
import { login } from "./api";
import { sha256Encode } from "../../utils/common/ValueParsingUtils";

export default () => {
    const navigate = useNavigate();

    const handleRedirectToRegisterPage = () => {
        navigate('/register');
    };

    const handleForgotPassword = () => {
        alert('Forgot password');
    };

    const handleLogin = async (values, {setSubmitting}) => {
        const encodedPassword = await sha256Encode(values.password);
        const userInfo = await login(values.username, encodedPassword);
        console.log(userInfo);

        setSubmitting(false);
    }

    return {handleLogin, handleRedirectToRegisterPage, handleForgotPassword};
}