import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { SIDE_NAV_WIDTH, SIDE_NAV_DARK, NAV_TYPE_SIDE } from 'constants/ThemeConstant';
import { Scrollbars } from 'react-custom-scrollbars-2';
import MenuContent from './MenuContent';
import { TEMPLATE, GRAY_SCALE, DARK_MODE } from "constants/ThemeConstant";
import { useAppSelector } from 'store/hooks';

const { Sider } = Layout;

export const SideNav = ({ navCollapsed, routeInfo, hideGroupTitle, currentTheme }: { navCollapsed?: boolean, routeInfo?: any, hideGroupTitle?: boolean, currentTheme?: string }) => {
  const sideNavTheme = useAppSelector(state => state.theme.sideNavTheme);
  const props = { sideNavTheme, routeInfo, hideGroupTitle }
  return (
    <Sider
      style={{
        height: `calc(100vh - ${TEMPLATE.HEADER_HEIGHT}px)`,
        position: 'fixed',
        top: `${TEMPLATE.HEADER_HEIGHT}px`,
        boxShadow: '0 1px 4px -1px rgba(0,0,0,.15)',
        zIndex: 999,
        direction: 'ltr',
        backgroundColor: `${currentTheme === 'light' && sideNavTheme !== SIDE_NAV_DARK ? GRAY_SCALE.WHITE : currentTheme === 'dark' && sideNavTheme !== SIDE_NAV_DARK ? DARK_MODE.BG_COLOR : currentTheme === 'dark' && sideNavTheme === SIDE_NAV_DARK ? TEMPLATE.SIDE_NAV_DARK_BG_COLOR : TEMPLATE.SIDE_NAV_DARK_BG_COLOR}`,
      }}

      className={`side-nav ${sideNavTheme === SIDE_NAV_DARK ? 'side-nav-dark' : ''}`}
      width={SIDE_NAV_WIDTH}
      collapsed={navCollapsed}
    >
      <Scrollbars autoHide>
        <MenuContent
          type={NAV_TYPE_SIDE}
          {...props}
        />
      </Scrollbars>
    </Sider>
  )
}


//TODO: Fix this css prop
const mapStateToProps = ({ theme }: any) => {
  const { navCollapsed, sideNavTheme, currentTheme } = theme;
  return { navCollapsed, sideNavTheme, currentTheme }
};

export default connect(mapStateToProps)(SideNav);
