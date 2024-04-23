import { DashboardOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export type NavItem = {
  key: string;
  path: string;
  title: string;
  icon: any;
  breadcrumb: boolean;
  isGroupTitle?: boolean;
  submenu: NavItem[];
}

const dashBoardNavTree: NavItem[] = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
},
{
  key: 'clients',
  path: `${APP_PREFIX_PATH}/clients`,
  title: 'clients.list',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: false,
  submenu: []
},


]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
