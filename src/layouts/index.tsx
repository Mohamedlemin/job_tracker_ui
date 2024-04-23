import React, { lazy, Suspense, memo } from 'react'
import { ConfigProvider } from 'antd';
import Loading from 'components/shared-components/Loading';
import { lightTheme, darkTheme } from 'configs/ThemeConfig';
import { resources } from 'lang';
import useBodyClass from 'utils/hooks/useBodyClass';
import Routes from 'routes'
import { useAppSelector } from 'store/hooks';

const AppLayout = lazy(() => import('./AppLayout'));
const AuthLayout = lazy(() => import('./AuthLayout'));

const Layouts = () => {

	const token = useAppSelector(state => state.auth.token);
	const blankLayout = useAppSelector(state => state.theme.blankLayout);

	const Layout = token && !blankLayout ? AppLayout : AuthLayout;

	const locale = useAppSelector(state => state.theme.locale);

	const direction = useAppSelector(state => state.theme.direction);

	const currentTheme = useAppSelector(state => state.theme.currentTheme);

	const currentAppLocale = resources[locale as 'en' | 'fr'];

	useBodyClass(`dir-${direction}`);


	return (
		<ConfigProvider
			theme={currentTheme === 'light' ? lightTheme : darkTheme}
			direction={direction as 'rtl' | 'ltr'}
			locale={currentAppLocale.antd}>
			<Suspense fallback={<Loading cover="content" />}>
				<Layout direction={direction as 'rtl' | 'ltr'}>
					<Routes />
				</Layout>
			</Suspense>
		</ConfigProvider>
	)
}

export default memo(Layouts)