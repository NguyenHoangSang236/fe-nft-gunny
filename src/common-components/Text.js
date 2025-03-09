import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import themeColor from '../config/ThemeColor';

function Text({
    text,
    color = themeColor.textPrimary,
    fontSize = '14px',
    fontWeight = 'normal',
    fontStyle = 'normal',
    textAlign = 'left',
    fontFamily = 'Arial, sans-serif',
    lineHeight = '1.5', 
    letterSpacing = 'normal',
    textDecoration = 'none',
    textTransform = 'none',
    margin = '0',
    padding = '0',
    className = '',
    style = {},
    onClick = null,
}) {
    const combinedStyle = {
        color,
        fontSize,
        fontWeight,
        textAlign,
        fontFamily,
        lineHeight,
        letterSpacing,
        textDecoration,
        textTransform,
        margin,
        padding,
        fontStyle,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
    };

    return (
        <span className={className} style={combinedStyle} onClick={onClick}>
            {text}
        </span>
    );
}

Text.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontStyle: PropTypes.string,
    textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    fontFamily: PropTypes.string,
    lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    letterSpacing: PropTypes.string,
    textDecoration: PropTypes.string,
    textTransform: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

export default Text;
