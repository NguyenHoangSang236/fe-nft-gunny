import React, { useCallback } from 'react';
import TextInput from '../../common-components/TextInput';
import Text from '../../common-components/Text';
import useStates from '../../utils/hooks/useStates';
import Button from '../../common-components/Button';
import themeColor from '../../config/themeColor';
import Container from '../../common-components/Container';
import { FlexDirection, HorizontalAlignment, VerticalAlignment } from '../../config/alignment';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    const [states, setStates] = useStates({
        username: '',
        password: '',
    });

    const handleLogin = useCallback(
        () => {
            alert('Login');
        },
        []
    );

    const handleForgotPassword = useCallback(
        () => {
            alert('Forgot password');
        },
        []
    );

    const handleRegister = useCallback(
        () => {
            navigate('/register')
        },
        []
    );

    return (
        <Container
            horizontalAlignment={HorizontalAlignment.CENTER}
            verticalAlignment={VerticalAlignment.CENTER}
            width='100vw'
            height='100vh'
            backgroundImage='game_logo.png'
        >
            <Container
                horizontalAlignment={HorizontalAlignment.CENTER}
                verticalAlignment={VerticalAlignment.CENTER}
                width='50%'
                padding='35px'
                borderRadius='20px'
                backgroundColor={themeColor.secondary}
                opacity={0.95}
            >
                <Text
                    text='WELCOME BACK!'
                    fontSize='30px'
                    fontWeight='bold'
                    textAlign='center'
                    color={themeColor.textPrimary}
                    fontFamily='Saira, sans-serif'
                />
                <Text
                    text='Please sign in your account'
                    fontSize='15px'
                    fontWeight='bold'
                    textAlign='center'
                    color={themeColor.textSecondary}
                />
                <TextInput
                    placeholder="Enter your username here"
                    value={states.username}
                    onChange={(e) => setStates({ username: e.target.value })}
                    width='100%'
                    margin='30px 0px 5px 0px'
                    borderRadius='40px'
                />
                <TextInput
                    placeholder="Enter your password here"
                    value={states.password}
                    onChange={(e) => setStates({ password: e.target.value })}
                    width='100%'
                    margin='5px 0px'
                    isPassword={true}
                    borderRadius='40px'
                />
                <Button
                    label={
                        <Text
                            text='Login'
                            fontSize='24px'
                            fontWeight='bold'
                        />
                    }
                    onClick={handleLogin} 
                    width='100%'
                    margin='15px 0px 5px 0px'
                    backgroundColor='#DAA020CC'
                    borderRadius='40px'
                />
                <Container
                    width='100%'
                    flexDirection={FlexDirection.ROW}
                    horizontalAlignment={HorizontalAlignment.RIGHT}
                    margin='0px 0px 30px 0px'
                >
                    <Text
                        text='Forgot password?'
                        fontStyle='italic'
                        fontSize='12px'
                        textDecoration='underline'
                        color='#2040e9'
                        onClick={handleForgotPassword}
                    />
                </Container>
                <Text
                    text='Have not had an account yet?'
                    fontSize='25px'
                    fontWeight='bold'
                />
                <Text
                    text='Create a new acount'
                    fontSize='20px'
                    fontWeight='bold'
                    textDecoration='underline'
                    color='#FF4500'
                    onClick={handleRegister}
                />
            </Container>
        </Container>
    );
}

export default LoginPage;
