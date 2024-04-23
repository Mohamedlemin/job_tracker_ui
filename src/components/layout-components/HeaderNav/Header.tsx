import React from 'react';
import { TEMPLATE } from 'constants/ThemeConstant';
import { FC } from 'react';

interface props {
	headerNavColor: string
	isDarkTheme: boolean,
	children: any
}
const Header: FC<props> = ({ isDarkTheme, headerNavColor, children }) => (
	<div style={{
		position: 'fixed',
		width: '100%',
		left: 0,
		zIndex: 1000,
		display: 'flex',
		flex: '0 0 auto',
		height: TEMPLATE.HEADER_HEIGHT,
		lineHeight: `${TEMPLATE.HEADER_HEIGHT}px`,
		backgroundColor: headerNavColor,
		boxShadow: isDarkTheme ? '0 1px 8px -1px rgb(0 0 0 / 75%)' : '0 1px 4px -1px rgb(0 0 0 / 15%)'
	}}>
		{children}
	</div>
)


export default Header