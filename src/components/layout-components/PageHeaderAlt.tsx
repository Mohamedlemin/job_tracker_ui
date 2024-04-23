import React, { useRef, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { css } from '@emotion/react';
import { TEMPLATE, GRAY_SCALE, NAV_TYPE_TOP, MEDIA_QUERIES } from 'constants/ThemeConstant';
import { useAppSelector } from 'store/hooks';

export const PageHeaderAlt = ({ children, background, className, overlap }: { children: React.ReactNode, background: string, className: string, overlap: boolean }) => {
	const [widthOffset, setWidthOffset] = useState(0)
	const ref = useRef<HTMLDivElement>(null);

	const navType = useAppSelector(state => state.theme.navType);
	const currentTheme = useAppSelector(state => state.theme.currentTheme);

	useEffect(() => {
		if (navType === NAV_TYPE_TOP) {
			const windowSize = window.innerWidth;
			const pageHeaderSize = ref.current?.offsetWidth ?? 0
			setWidthOffset((windowSize - pageHeaderSize) / 2);
		}
	}, [navType, ref]);

	const getStyle = () => {
		let style: React.CSSProperties = { backgroundImage: background ? `url(${background})` : 'none' }
		if (navType === NAV_TYPE_TOP) {
			style.marginRight = -widthOffset
			style.marginLeft = -widthOffset
			style.paddingLeft = 0
			style.paddingRight = 0
		}
		return style
	}

	return (
		<div
			ref={ref}
			// TODO: Fix this css prop
			// css={css`
			// 	background-color: ${currentTheme === 'dark' ? '#2f3a50' : GRAY_SCALE.WHITE};
			// 	padding: ${TEMPLATE.LAYOUT_CONTENT_GUTTER}px;
			// 	margin-top: -${TEMPLATE.LAYOUT_CONTENT_GUTTER}px;
			// 	margin-left: -${TEMPLATE.LAYOUT_CONTENT_GUTTER}px;
			// 	margin-right: -${TEMPLATE.LAYOUT_CONTENT_GUTTER}px;

			// 	@media ${MEDIA_QUERIES.MOBILE} {
			// 		margin-left: -${TEMPLATE.LAYOUT_CONTENT_GUTTER_SM}px;
			// 		margin-right: -${TEMPLATE.LAYOUT_CONTENT_GUTTER_SM}px;
			// 	}

			// 	${overlap ? 'margin-bottom: -4.6875rem;' : ''}
			// `}
			className={`page-header-alt ${className ? className : ''}`}
			style={getStyle()}
		>
			{navType === NAV_TYPE_TOP ? <div className="container">{children}</div> : <>{children}</>}
		</div>
	)
}

PageHeaderAlt.propTypes = {
	children: PropTypes.node,
	background: PropTypes.string,
	className: PropTypes.string,
	overlap: PropTypes.bool
};

export default PageHeaderAlt;