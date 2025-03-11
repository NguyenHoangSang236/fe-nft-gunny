import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Container from "../../common-components/Container";
import { FlexDirection, HorizontalAlignment, VerticalAlignment } from "../../config/Alignment";
import TextInput from "../../common-components/TextInput";
import Text from "../../common-components/Text";
import Button from "../../common-components/Button";
import themeColor from "../../config/ThemeColor";
import useLogic from './useLogic';

function RegisterPage() {
    const {handleRegister, handleRedirectToLogin} = useLogic();

    // Define validation schema using Yup - all fields required
    const RegisterSchema = Yup.object().shape({
        user_name: Yup.string()
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
        phone_number: Yup.string()
            .required('Phone number is required')
            .matches(/^[0-9]{10,15}$/, 'Phone number must be between 10-15 digits'),
        wallet_hash_address: Yup.string()
            .required('Wallet address is required')
            .matches(/^(0x)?[0-9a-fA-F]{64}$/, 'Invalid wallet address format')
    });

    return (
        <Container
            horizontalAlignment={HorizontalAlignment.CENTER}
            verticalAlignment={VerticalAlignment.CENTER}
            backgroundImage='game_logo.png'
            padding='10vh 0px 10vh 0px'
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
                        user_name: '',
                        password: '',
                        cfmPassword: '', 
                        email: '',
                        phone_number: '',
                        wallet_hash_address: '',
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={handleRegister}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form style={{ width: '100%' }}>
                            <div style={{ position: 'relative' }}>
                                <TextInput
                                    id='user_name'
                                    placeholder="Enter your username"
                                    name="user_name"
                                    value={values.user_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='10px 0px 5px 0px'
                                    borderRadius='40px'
                                    borderColor={touched.user_name && errors.user_name ? 'red' : themeColor.border}
                                />
                                {touched.user_name && errors.user_name && (
                                    <Text
                                        text={errors.user_name}
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
                                    id='phone_number'
                                    placeholder="Enter your phone number"
                                    name="phone_number"
                                    value={values.phone_number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='10px 0px 5px 0px'
                                    borderRadius='40px'
                                    borderColor={touched.phone_number && errors.phone_number ? 'red' : themeColor.border}
                                />
                                {touched.phone_number && errors.phone_number && (
                                    <Text
                                        text={errors.phone_number}
                                        fontSize='12px'
                                        color='red'
                                        margin='0px 0px 5px 15px'
                                    />
                                )}
                            </div>

                            <div style={{ position: 'relative' }}>
                                <TextInput
                                    id='wallet_hash_address'
                                    placeholder="Enter your wallet address"
                                    name="wallet_hash_address"
                                    value={values.wallet_hash_address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width='100%'
                                    margin='10px 0px 5px 0px'
                                    borderRadius='40px'
                                    borderColor={touched.wallet_hash_address && errors.wallet_hash_address ? 'red' : themeColor.border}
                                />
                                {touched.wallet_hash_address && errors.wallet_hash_address && (
                                    <Text
                                        text={errors.wallet_hash_address}
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
                        onClick={handleRedirectToLogin}
                    />
                </Container>
            </Container>
        </Container>
    );
}

export default RegisterPage;