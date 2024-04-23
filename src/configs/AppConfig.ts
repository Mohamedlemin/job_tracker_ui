import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE, DIR_LTR } from 'constants/ThemeConstant';
import { env } from './EnvironmentConfig'

export const APP_NAME = 'Emilus';
export const API_BASE_URL = env?.API_ENDPOINT_URL ?? "";
export const APP_PREFIX_PATH = '/app';
export const AUTH_PREFIX_PATH = '/auth';
export const REDIRECT_URL_KEY = 'redirect'
export const AUTHENTICATED_ENTRY = `${APP_PREFIX_PATH}/dashboards/default`;
export const UNAUTHENTICATED_ENTRY = '/login'

type AppConfig = {
	navCollapsed: boolean;
	sideNavTheme: string;
	locale: 'en' | 'fr' | 'ar';
	navType: string;
	topNavColor: string;
	headerNavColor: string;
	mobileNav: boolean;
	currentTheme: string;
	direction: string;
	blankLayout: boolean;
};
export const THEME_CONFIG: AppConfig = {
	navCollapsed: false,
	sideNavTheme: SIDE_NAV_LIGHT,
	locale: 'en',
	navType: NAV_TYPE_SIDE,
	topNavColor: '#3e82f7',
	headerNavColor: '',
	mobileNav: false,
	currentTheme: 'light',
	direction: DIR_LTR,
	blankLayout: false
};
