import React from 'react';
import themeColor from '../config/ThemeColor';
import PropTypes from 'prop-types';

function Button({ 
  label, 
  onClick, 
  icon, 
  tooltip, 
  backgroundColor, 
  textColor, 
  width, 
  height,
  borderRadius,
  cursor,
  padding,
  outline,
  borderWidth, 
  borderStyle, 
  borderColor,
  fontSize,
  backgroundColorOnClick,
  iconAndLabelGap,
  margin
}) {
  const buttonStyle = {
    width,
    height,
    backgroundColor,
    color: textColor,
    border: `${borderWidth} ${borderStyle} ${borderColor}`,
    borderRadius,
    fontSize,
    cursor,
    transition: 'background-color 0.3s',
    padding,
    outline,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: iconAndLabelGap,
    margin: margin,
  };

  const tooltipStyle = {
    visibility: 'hidden',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '4px',
    padding: '5px',
    position: 'absolute',
    bottom: 'calc(100% + 5px)',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
    fontSize: '12px',
    whiteSpace: 'nowrap',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = backgroundColorOnClick;
    if (tooltip) {
      const tooltipElement = e.target.querySelector('.tooltip');
      tooltipElement.style.visibility = 'visible';
    }
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = backgroundColor;
    if (tooltip) {
      const tooltipElement = e.target.querySelector('.tooltip');
      tooltipElement.style.visibility = 'hidden';
    }
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <span>{icon}</span>}
      {label}
      {tooltip && <span className="tooltip" style={tooltipStyle}>{tooltip}</span>}
    </button>
  );
}

Button.defaultProps = {
  icon: null,
  tooltip: '',
  backgroundColor: themeColor.buttonBackground,
  textColor: themeColor.textPrimary,
  width: 'fit-content',
  height: 'fit-content',
  borderRadius: '10px',
  cursor: 'pointer',
  padding: '10px',
  outline: 'none',
  borderWidth: '1px', 
  borderStyle: 'solid', 
  borderColor: themeColor.border,
  fontSize: '16px',
  backgroundColorOnClick: '#5a7be1',
  iconAndLabelGap: '10px',
  margin: 'none'
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  tooltip: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  cursor: PropTypes.string,
  padding: PropTypes.string,
  outline: PropTypes.string,
  borderWidth: PropTypes.string,
  borderStyle: PropTypes.string,
  borderColor: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColorOnClick: PropTypes.string,
  iconAndLabelGap: PropTypes.string,
  margin: PropTypes.string
};

export default Button;