import React from 'react';
import themeColor from '../config/themeColor';
import { FlexDirection, HorizontalAlignment, VerticalAlignment } from '../config/alignment';
import { justifyContent, alignItems, shadow } from '../utils/style/styleUtils';

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
		backgroundColor: backgroundColor, 
		backgroundImage: backgroundImage ? `url(${process.env.PUBLIC_URL}/${backgroundImage})` : 'none',
		backgroundSize: backgroundFit,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		display: 'flex',
		flexDirection: flexDirection,
		justifyContent: justifyContent(horizontalAlignment),
		alignItems: alignItems(verticalAlignment),
		width: width, 
		height: height, 
		padding: padding, 
		margin: margin, 
		borderRadius: borderRadius, 
		borderWidth: borderWidth, 
		borderStyle: borderStyle, 
		borderColor: borderColor, 
		boxShadow: boxShadow, 
		overflow: 'hidden', 
		opacity: opacity,
	};

	return <div style={style}>{children}</div>;
}

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