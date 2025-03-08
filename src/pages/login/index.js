import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../common-components/TextInput';
import Text from '../../common-components/Text';
import Button from '../../common-components/Button';
import themeColor from '../../config/themeColor';
import Container from '../../common-components/Container';
import { FlexDirection, HorizontalAlignment, VerticalAlignment } from '../../config/alignment';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    // Define validation schema using Yup
    const LoginSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });

    const handleForgotPassword = () => {
        alert('Forgot password');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = (values, {setSubmitting}) => {
        // Handle form submission
        console.log('Form values:', values);
        alert('Login with: ' + JSON.stringify(values));
        setSubmitting(false);
    }

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

                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={handleLogin}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form style={{ width: '100%' }}>
                            <div style={{ position: 'relative' }}>
                                <TextInput
                                    id='username'
                                    placeholder="Enter your username here"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='30px 0px 5px 0px'
                                    borderRadius='40px'
                                    borderColor={touched.username && errors.username ? 'red' : themeColor.border}
                                />
                                {touched.username && errors.username && (
                                    <Text
                                        text={errors.username}
                                        fontSize='12px'
                                        color='red'
                                        margin='0px 0px 5px 15px'
                                    />
                                )}
                            </div>

                            <div style={{ position: 'relative' }}>
                                <TextInput
                                    id='password'
                                    placeholder="Enter your password here"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='5px 0px'
                                    isPassword={true}
                                    borderRadius='40px'
                                    borderColor={touched.password && errors.password ? 'red' : themeColor.border}
                                />
                                {touched.password && errors.password && (
                                    <Text
                                        text={errors.password}
                                        fontSize='12px'
                                        color='red'
                                        margin='0px 0px 5px 15px'
                                    />
                                )}
                            </div>

                            <Button
                                label={
                                    <Text
                                        text='Login'
                                        fontSize='24px'
                                        fontWeight='bold'
                                    />
                                }
                                type="submit"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                width='100%'
                                margin='15px 0px 5px 0px'
                                backgroundColor='#DAA020CC'
                                borderRadius='40px'
                            />
                        </Form>
                    )}
                </Formik>

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