import React from "react";
import { Drawer } from "antd";
import { NAV_TYPE_SIDE } from "constants/ThemeConstant";
import { Scrollbars } from "react-custom-scrollbars-2";
import MenuContent from "./MenuContent";
import { onMobileNavToggle } from 'store/slices/themeSlice';
import Logo from "./Logo";
import { DashOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "store/hooks";

export const MobileNav = ({
	routeInfo,
	hideGroupTitle
}: {
	routeInfo: any;
	hideGroupTitle?: boolean;

}) => {

	const dispatch = useAppDispatch();
	const currentTheme = useAppSelector(state => state.theme.currentTheme);
	const mobileNav = useAppSelector(state => state.theme.mobileNav);

	const menuContentprops = { routeInfo, hideGroupTitle };

	const onClose = () => {
		dispatch(onMobileNavToggle(false));
	};

	return (
		<Drawer
			placement="left"
			closable={false}
			onClose={onClose}
			open={mobileNav}
			width={300}
		>
			<div style={{ display: 'flex', flexDirection: 'column' }} className="h-100">
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Logo logoType={currentTheme === 'dark' ? 'light' : 'dark'} mobileLogo={true} />
					<div className="px-3" onClick={() => onClose()}>
						<DashOutlined />
					</div>
				</div>
				<div className="h-100">
					<Scrollbars autoHide>
						<MenuContent type={NAV_TYPE_SIDE} {...menuContentprops} />
					</Scrollbars>
				</div>
			</div>

		</Drawer>
	);
};

export default MobileNav;
