import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import Container from "../../common-components/Container";
import { FlexDirection, HorizontalAlignment, VerticalAlignment } from "../../config/Alignment";
import TextInput from "../../common-components/TextInput";
import Text from "../../common-components/Text";
import Button from "../../common-components/Button";
import themeColor from "../../config/ThemeColor";

function RegisterPage() {
    const navigate = useNavigate();

    // Define validation schema using Yup - all fields required
    const RegisterSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(3, 'Username must be at least 3 characters'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        cfmPassword: Yup.string()
            .required('Please confirm your password')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email format'),
        phoneNumber: Yup.string()
            .required('Phone number is required')
            .matches(/^[0-9]{10,15}$/, 'Phone number must be between 10-15 digits'),
        walletHashAddress: Yup.string()
            .required('Wallet address is required')
            .matches(/^(0x)?[0-9a-fA-F]{40}$/, 'Invalid wallet address format')
    });

    const handleRegister = (values, { setSubmitting }) => {
        console.log('Registration values:', values);
        alert('Registration with: ' + JSON.stringify(values));
        setSubmitting(false);
        // Navigate to login page after successful registration
        // navigate('/login');
    };

    const handleBackToLogin = () => {
        navigate('/login');
    };

    return (
        <Container
            horizontalAlignment={HorizontalAlignment.CENTER}
            verticalAlignment={VerticalAlignment.CENTER}
            width='100vw'
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
                overflowY="auto"
                maxHeight="80vh"
                className="custom-scrollbar"
                style={{ 
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(218, 160, 32, 0.7) rgba(0, 0, 0, 0.1)'
                }}
            >
                <Text
                    text='CREATE ACCOUNT'
                    fontSize='30px'
                    fontWeight='bold'
                    textAlign='center'
                    color={themeColor.textPrimary}
                    fontFamily='Saira, sans-serif'
                    margin='0px 0px 10px 0px'
                />
                <Text
                    text='Join our community'
                    fontSize='15px'
                    fontWeight='bold'
                    textAlign='center'
                    color={themeColor.textSecondary}
                    margin='0px 0px 20px 0px'
                />

                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        cfmPassword: '',
                        email: '',
                        phoneNumber: '',
                        walletHashAddress: '',
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={handleRegister}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form style={{ width: '100%' }}>
                            <div style={{ position: 'relative' }}>
                                <TextInput
                                    id='username'
                                    placeholder="Enter your username"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='10px 0px 5px 0px'
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
                                    id='email'
                                    placeholder="Enter your email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='10px 0px 5px 0px'
                                    borderRadius='40px'
                                    borderColor={touched.email && errors.email ? 'red' : themeColor.border}
                                />
                                {touched.email && errors.email && (
                                    <Text
                                        text={errors.email}
                                        fontSize='12px'
                                        color='red'
                                        margin='0px 0px 5px 15px'
                                    />
                                )}
                            </div>

                            <div style={{ position: 'relative' }}>
                                <TextInput
                                    id='phoneNumber'
                                    placeholder="Enter your phone number"
                                    name="phoneNumber"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='10px 0px 5px 0px'
                                    borderRadius='40px'
                                    borderColor={touched.phoneNumber && errors.phoneNumber ? 'red' : themeColor.border}
                                />
                                {touched.phoneNumber && errors.phoneNumber && (
                                    <Text
                                        text={errors.phoneNumber}
                                        fontSize='12px'
                                        color='red'
                                        margin='0px 0px 5px 15px'
                                    />
                                )}
                            </div>

                            <div style={{ position: 'relative' }}>
                                <TextInput
                                    id='walletHashAddress'
                                    placeholder="Enter your wallet address"
                                    name="walletHashAddress"
                                    value={values.walletHashAddress}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='10px 0px 5px 0px'
                                    borderRadius='40px'
                                    borderColor={touched.walletHashAddress && errors.walletHashAddress ? 'red' : themeColor.border}
                                />
                                {touched.walletHashAddress && errors.walletHashAddress && (
                                    <Text
                                        text={errors.walletHashAddress}
                                        fontSize='12px'
                                        color='red'
                                        margin='0px 0px 5px 15px'
                                    />
                                )}
                            </div>

                            <div style={{ position: 'relative' }}>
                                <TextInput
                                    id='password'
                                    placeholder="Enter your password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='10px 0px 5px 0px'
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

                            <div style={{ position: 'relative' }}>
                                <TextInput
                                    id='cfmPassword'
                                    placeholder="Confirm your password"
                                    name="cfmPassword"
                                    value={values.cfmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='10px 0px 5px 0px'
                                    isPassword={true}
                                    borderRadius='40px'
                                    borderColor={touched.cfmPassword && errors.cfmPassword ? 'red' : themeColor.border}
                                />
                                {touched.cfmPassword && errors.cfmPassword && (
                                    <Text
                                        text={errors.cfmPassword}
                                        fontSize='12px'
                                        color='red'
                                        margin='0px 0px 5px 15px'
                                    />
                                )}
                            </div>

                            <Button
                                label={
                                    <Text
                                        text='Register'
                                        fontSize='24px'
                                        fontWeight='bold'
                                    />
                                }
                                type="submit"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                width='100%'
                                margin='20px 0px 15px 0px'
                                backgroundColor='#DAA020CC'
                                borderRadius='40px'
                            />
                        </Form>
                    )}
                </Formik>

                <Container
                    width='100%'
                    flexDirection={FlexDirection.ROW}
                    horizontalAlignment={HorizontalAlignment.CENTER}
                    margin='10px 0px 0px 0px'
                >
                    <Text
                        text='Already have an account?'
                        fontSize='18px'
                        fontWeight='bold'
                        margin='0px 10px 0px 0px'
                    />
                    <Text
                        text='Sign in'
                        fontSize='18px'
                        fontWeight='bold'
                        textDecoration='underline'
                        color='#2040e9'
                        onClick={handleBackToLogin}
                    />
                </Container>
            </Container>
        </Container>
    );
}

export default RegisterPage;