import React from 'react';
import PropTypes from 'prop-types';
import { FlexDirection, HorizontalAlignment, VerticalAlignment } from '../config/Alignment';
import { justifyContent, alignItems } from '../utils/style/styleUtils';

function Container({ 
	backgroundColor, 
	backgroundFit,
	backgroundImage,
	children, 
	width, 
	height, 
	padding, 
	margin,
	borderRadius, 
	borderWidth, 
	borderStyle, 
	borderColor,
	horizontalAlignment,
	verticalAlignment,
	flexDirection,
	boxShadow,
	opacity,
}) {
	const style = {
		backgroundColor, 
		backgroundImage: backgroundImage ? `url(${process.env.PUBLIC_URL}/${backgroundImage})` : 'none',
		backgroundSize: backgroundFit,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		display: 'flex',
		flexDirection,
		justifyContent: justifyContent(horizontalAlignment),
		alignItems: alignItems(verticalAlignment),
		width, 
		height, 
		padding, 
		margin, 
		borderRadius, 
		borderWidth, 
		borderStyle, 
		borderColor, 
		boxShadow, 
		overflow: 'hidden', 
		opacity,
	};

	return <div style={style}>{children}</div>;
}

Container.propTypes = {
	backgroundColor: PropTypes.string,
	backgroundFit: PropTypes.string,
	backgroundImage: PropTypes.string,
	children: PropTypes.node,
	width: PropTypes.string,
	height: PropTypes.string,
	padding: PropTypes.string,
	margin: PropTypes.string,
	borderRadius: PropTypes.string,
	borderWidth: PropTypes.string,
	borderStyle: PropTypes.string,
	borderColor: PropTypes.string,
	horizontalAlignment: PropTypes.oneOf(Object.values(HorizontalAlignment)),
	verticalAlignment: PropTypes.oneOf(Object.values(VerticalAlignment)),
	flexDirection: PropTypes.oneOf(Object.values(FlexDirection)),
	boxShadow: PropTypes.string,
	opacity: PropTypes.number
};

Container.defaultProps = {
	backgroundColor: 'none',
	width: 'auto',
	backgroundFit: 'cover',
	height: 'auto',
	padding: '0',
	margin: '0',
	borderRadius: '0',
	borderWidth: '0',
	borderStyle: 'solid',
	borderColor: 'transparent',
	horizontalAlignment: HorizontalAlignment.LEFT,
	verticalAlignment: VerticalAlignment.TOP,
	boxShadow: 'none',
	flexDirection: FlexDirection.COLUMN,
	opacity: 1
};

export default Container;




// SAMPLE codes

// boxShadow: shadow({
// 	offsetX:'10px', 
// 	offsetY:'10px', 
// 	blurRadius:'10px', 
// 	spreadRadius:'20px',
// }),