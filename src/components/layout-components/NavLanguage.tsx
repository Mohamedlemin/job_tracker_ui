import React from 'react';
import { CheckOutlined, GlobalOutlined, DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import NavItem from './NavItem'
import lang from 'assets/data/language.data.json';
import { onLocaleChange } from 'store/slices/themeSlice';
import i18n from 'i18next'
import { SPACER } from 'constants/ThemeConstant';
import { baseTheme } from 'configs/ThemeConfig';
import { useAppDispatch, useAppSelector } from 'store/hooks';

function getLanguageDetail(locale: string) {
	const data = lang.filter(elm => (elm.langId === locale))
	return data[0]
}

const SelectedLanguage = () => {

	const locale = useAppSelector(state => state.theme.locale)

	const language = getLanguageDetail(locale);
	const { langName, icon } = language;

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<img style={{ maxWidth: '20px' }} src={`/img/flags/${icon}.png`} alt={langName} />
			<span className="font-weight-semibold ml-2">{langName} <DownOutlined className="font-size-xs" /></span>
		</div>

	)
}


const MenuItem = (props: { langId: string; icon: any; langName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }) => {
	const locale = useAppSelector(state => state.theme.locale);
	const dispatch = useAppDispatch();

	const handleLocaleChange = (langId: string) => {
		dispatch(onLocaleChange(langId))
		i18n.changeLanguage(langId)
	}

	return (
		<span>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: SPACER[4] }} onClick={() => handleLocaleChange(props.langId)}>
				<div style={{ display: 'flex', alignItems: 'center', gap: SPACER[2] }}>
					<img style={{ maxWidth: '20px' }} src={`/img/flags/${props.icon}.png`} alt={props.langName as string} />
					<span className="font-weight-normal ml-2">{props.langName}</span>
				</div>
				{locale === props.langId ? <CheckOutlined style={{ color: baseTheme.colorSuccess }} /> : null}
			</div>

		</span>
	)
}

const items = [
	{
		key: 'En',
		label: <MenuItem icon="us" langName="English" langId="en" />
	},
	{
		key: 'Ch',
		label: <MenuItem icon="cn" langName="Chinese" langId="zh" />
	},
	{
		key: 'Fr',
		label: <MenuItem icon="fr" langName="French" langId="fr" />
	},
	{
		key: 'Jp',
		label: <MenuItem icon="jp" langName="Janpanese" langId="ja" />
	}
];


export const NavLanguage = ({ configDisplay, mode }: { configDisplay: boolean, mode?: string }) => {

	return (
		<Dropdown placement="bottomRight" menu={{ items }} trigger={["click"]}>
			{
				configDisplay ?
					(
						<a href="#/" className="text-gray" onClick={e => e.preventDefault()}>
							<SelectedLanguage />
						</a>
					)
					:
					(
						<NavItem
						// TODO: Add mode prop to NavItem
						// mode={mode}
						>
							<GlobalOutlined className="nav-icon mr-0" />
						</NavItem>
					)
			}
		</Dropdown>
	)
}

export default NavLanguage;
