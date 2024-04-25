import { DashboardOutlined, ProfileOutlined, ProjectOutlined, CalendarOutlined, FolderOpenTwoTone } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    
    {
      key: 'applications',
      path: `${APP_PREFIX_PATH}/applications`,
      title: 'sidenav.apps.project.applications',
      icon: ProjectOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'components-data-display-calendar',
      path: `${APP_PREFIX_PATH}/calendar`,
      title: 'sidenav.components.dataDisplay.calendar',
      icon: CalendarOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'extra-pages-profile',
      path: `${APP_PREFIX_PATH}/profile`,
      title: 'sidenav.pages.profile',
      icon: ProfileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'extra-pages-list',
      path: `${APP_PREFIX_PATH}/list`,
      title: 'Camponies',
      icon: FolderOpenTwoTone,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
