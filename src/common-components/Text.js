import React from 'react';
import themeColor from '../config/themeColor';

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
    textDecoration = 'none', // Trang trí (gạch chân, gạch ngang...)
    textTransform = 'none',
    margin = '0',
    padding = '0',
    className = '', // CSS class (nếu muốn mở rộng style)
    style = {}, // Style tùy chỉnh
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

export default Text;
