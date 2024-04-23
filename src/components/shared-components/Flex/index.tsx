import styled from '@emotion/styled';

const Flex = styled.div<{ justifyContent?: string; mobileFlex?: boolean, alignItems?: string; flexDirection?: string; gap?: number | string; padding?: string; margin?: string }>(({ justifyContent, alignItems, flexDirection, gap, padding, margin }) => {

	const baseStyle = {
		display: 'flex',
		// justifyContent: justifyContent,
		alignItems: alignItems,
		gap: typeof gap === 'number' ? `${gap}px` : gap,
		padding: '0px',
		margin: '0px',
		flexDirection: 'row'
	}

	if (flexDirection) {
		baseStyle.flexDirection = flexDirection
	}

	if (padding) {
		baseStyle.padding = padding
	}

	if (margin) {
		baseStyle.margin = margin
	}

	return { ...baseStyle }
})

export default Flex
