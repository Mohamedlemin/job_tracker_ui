import React, { FC, useMemo } from 'react';
import { TEMPLATE } from 'constants/ThemeConstant';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Logo from '../Logo';
import NavProfile from '../NavProfile';
import Header from './Header';
import HeaderWrapper from './HeaderWrapper';
import Nav from './Nav'
import NavEdge from './NavEdge';
import NavItem from '../NavItem';
import { toggleCollapsedNav, onMobileNavToggle } from 'store/slices/themeSlice';
import { NAV_TYPE_TOP, SIDE_NAV_COLLAPSED_WIDTH, SIDE_NAV_WIDTH } from 'constants/ThemeConstant';
import utils from 'utils'
import { useAppDispatch, useAppSelector } from 'store/hooks';


interface props {
	isMobile: boolean

}
export const HeaderNav: FC<props> = ({ isMobile }) => {



	const dispatch = useAppDispatch()

	const navCollapsed = useAppSelector(state => state.theme.navCollapsed)
	const mobileNav = useAppSelector(state => state.theme.mobileNav)
	const navType = useAppSelector(state => state.theme.navType)
	const headerNavColor = useAppSelector(state => state.theme.headerNavColor)
	const currentTheme = useAppSelector(state => state.theme.currentTheme)


	const onToggle = () => {
		if (!isMobile) {
			dispatch(toggleCollapsedNav(!navCollapsed))
		} else {
			dispatch(onMobileNavToggle(!mobileNav))
		}
	}

	const isNavTop = navType === NAV_TYPE_TOP
	const isDarkTheme = currentTheme === 'dark'

	const navMode = useMemo(() => {
		if (!headerNavColor) {
			return utils.getColorContrast(isDarkTheme ? '#000000' : '#ffffff')
		}
		return utils.getColorContrast(headerNavColor);
	}, [isDarkTheme, headerNavColor])

	const navBgColor = isDarkTheme ? TEMPLATE.HEADER_BG_DEFAULT_COLOR_DARK : TEMPLATE.HEADER_BG_DEFAULT_COLOR_LIGHT;

	const getNavWidth = () => {
		if (isNavTop || isMobile) {
			return '0px';
		}
		if (navCollapsed) {
			return `${SIDE_NAV_COLLAPSED_WIDTH}px`;
		} else {
			return `${SIDE_NAV_WIDTH}px`;
		}
	}




	return (
		<Header isDarkTheme={isDarkTheme} headerNavColor={headerNavColor || navBgColor}>
			<HeaderWrapper isNavTop={isNavTop}>
				<Logo logoType={navMode} />
				<Nav navWidth={getNavWidth()}>
					<NavEdge left>
						{
							isNavTop && !isMobile ? null : (
								<NavItem onClick={onToggle} mode={navMode as any}>
									<div className="d-flex align-items-center">
										{navCollapsed || isMobile ? <MenuUnfoldOutlined className="nav-icon" /> : <MenuFoldOutlined className="nav-icon" />}
									</div>
								</NavItem>
							)
						}
					</NavEdge>
					<NavEdge right>
						<NavProfile mode={navMode} />
					</NavEdge>
				</Nav>
			</HeaderWrapper>
		</Header>
	)
}

export default HeaderNav;