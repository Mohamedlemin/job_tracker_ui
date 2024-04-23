import styled from '@emotion/styled';

const HeaderWrapper = styled.div<{ isNavTop: boolean }>(({ isNavTop }) => ({
	width: '100%',
	display: 'flex',
	...isNavTop ? { maxWidth: '100%', margin: 'auto' } : {}
}))


export default HeaderWrapper