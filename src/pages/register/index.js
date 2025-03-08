import { useNavigate } from "react-router-dom";
import Container from "../../common-components/Container";
import { HorizontalAlignment, VerticalAlignment } from "../../config/alignment";
import useStates from "../../utils/hooks/useStates";

function RegisterPage() {
    const navigate = useNavigate();

    const [states, setStates] = useStates({
        username: '',
        password: '',
        cfmPassword: '',
        email: '',
        phoneNumber: '',
        walletHashAddress: '',
    });


    return (
        <Container
            horizontalAlignment={HorizontalAlignment.CENTER}
            verticalAlignment={VerticalAlignment.CENTER}
            width='100vw'
            height='100vh'
            backgroundImage='game_logo.png'
        >
            

        </Container>
    );
}

export default RegisterPage;