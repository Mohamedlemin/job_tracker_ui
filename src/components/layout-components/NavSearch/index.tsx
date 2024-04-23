import React from 'react';
import { connect } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import SearchInput from './SearchInput';
import { TEMPLATE, FONT_SIZES } from 'constants/ThemeConstant';
import { RootState } from 'store';

const SeachWrapper = styled.div<{ active: boolean; mode: string; headerBg: string }>(({ active, mode, headerBg }) => ({
	height: TEMPLATE.HEADER_HEIGHT,
	padding: '0 1.5rem',
	position: 'absolute',
	width: '100%',
	backgroundColor: headerBg,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	fontSize: FONT_SIZES.LG,
	top: active ? 0 : -TEMPLATE.HEADER_HEIGHT,
	transition: 'all 0.3s ease'
}))

const NavItem = styled('div')`
	height: ${TEMPLATE.HEADER_HEIGHT}px;
	padding: 0 1.5rem;
	position: absolute;
	width: 100%;
	background-color: ${(props: any) => props.headerBg};
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: ${FONT_SIZES.LG};
	top: ${(props: any) => props.active ? 0 : -TEMPLATE.HEADER_HEIGHT};
	transition: all 0.3s ease;

	${(props: any) => props.mode === 'light' ? `
		.ant-select-selection-search-input {
			color: @white;
		}

		.ant-select-selection-placeholder {
			color: rgba(@white, 0.85);
		}
	` : ''}
`

export const NavSearch = (props: { active: any; close: any; headerNavColor: any; currentTheme: any; mode: any; }) => {
	const { active, close, headerNavColor, currentTheme, mode } = props

	const headerBgBase = currentTheme === 'dark' ? TEMPLATE.HEADER_BG_DEFAULT_COLOR_DARK : TEMPLATE.HEADER_BG_DEFAULT_COLOR_LIGHT;

	return (
		<SeachWrapper active={active} mode={mode} headerBg={headerNavColor || headerBgBase}>
			<SearchInput close={close} active={active} mode={mode} />
			<div className="nav-close" onClick={close}>
				<CloseOutlined />
			</div>
		</SeachWrapper>
	)
}

const mapStateToProps = ({ theme }: RootState) => {
	const { headerNavColor } = theme;
	return { headerNavColor }
};

export default connect(mapStateToProps, {})(NavSearch)