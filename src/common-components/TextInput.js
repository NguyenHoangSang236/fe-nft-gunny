import React, { useState } from 'react';
import PropTypes from 'prop-types';
import themeColor from '../config/themeColor';
import { alignItems, justifyContent } from '../utils/style/styleUtils';

const PasswordToggleIcon = ({ isVisible, onClick }) => (
    <span 
        style={{
            cursor: 'pointer',
        }}
        onClick={onClick}
        aria-label={isVisible ? 'Hide password' : 'Show password'}
        role="button"
    >
        {isVisible ? '👁️' : '🙈'}
    </span>
);

function TextInput({ 
    placeholder, 
    label,
    fontSize,
    value, 
    onChange, 
    width, 
    height, 
    padding, 
    borderRadius, 
    borderWidth, 
    borderStyle, 
    borderColor,
    margin,
    backgroundColor,
    isPassword,
    disabled,
    loading
}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const containerStyle = {
        width,
        margin,
    };

    const labelStyle = {
        fontSize: '13px'
    }

    const inputStyle = {
        width: '-webkit-fill-available',
        height: '-webkit-fill-available',
        fontSize,
        outline: 'none',
        backgroundColor,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'text',
        opacity: disabled ? 0.6 : 1,
    };

    const inputContainerStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        border: `${borderWidth} ${borderStyle} ${borderColor}`,
        borderRadius,
        transition: 'border-color 0.3s ease',
        height,
        padding,
        margin: '10px 0px 0px 0px',
        backgroundColor
    };

    const togglePasswordVisibility = () => {
        if (!disabled) setIsPasswordVisible(prev => !prev);
    };

    return (
        <div style={containerStyle}>
            <div style={labelStyle}>
                {label}
            </div>
            <div style={inputContainerStyle}>
                {loading && <span>Loading...</span>}
                <input
                    type={isPassword && !isPasswordVisible ? 'password' : 'text'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={inputStyle}
                    disabled={disabled}
                />
                {isPassword && (
                    <PasswordToggleIcon 
                        isVisible={isPasswordVisible} 
                        onClick={togglePasswordVisibility} 
                    />
                )}
            </div>
        </div>
        
    );
}

TextInput.defaultProps = {
    placeholder: 'Input text...',
    width: '100%',
    padding: '15px',
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: themeColor.border,
    backgroundColor: themeColor.primary,
    margin: 'none',
    isPassword: false,
    disabled: false,
    loading: false,
    fontSize: '16px',
};

TextInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
    borderRadius: PropTypes.string,
    borderWidth: PropTypes.string,
    borderStyle: PropTypes.string,
    borderColor: PropTypes.string,
    margin: PropTypes.string,
    backgroundColor: PropTypes.string,
    isPassword: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
};

export default TextInput;
