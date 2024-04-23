import React from 'react';
import { ConfigProvider } from 'antd';
import Routes from 'routes'; // Adjust path as needed
import { resources } from 'lang';
import useBodyClass from 'utils/hooks/useBodyClass';
import { useAppSelector } from 'store/hooks';
import { Locale } from 'antd/es/locale';

// Define DirectionType if it's a custom type

type DirectionType = 'ltr' | 'rtl';

interface RootState {
  theme: {
    locale: string;
    direction: DirectionType;
  };
}

interface ResourceLocale {
  translation: {
    home: string;
    "sidenav.dashboard": string;
    "sidenav.dashboard.default": string;
    "sidenav.dashboard.analytic": string;
    // ... other translations
  };
  antd: Locale;
}

interface Resources {
  [key: string]: ResourceLocale;
}

export const Views = () => {
  const { locale, direction } = useAppSelector((state) => state.theme);

  const currentAppLocale: ResourceLocale = resources[locale as 'en' | 'fr'];

  useBodyClass(`dir-${direction}`);

  return (
    <ConfigProvider direction={direction as DirectionType} locale={currentAppLocale.antd}>
      <Routes />
    </ConfigProvider>
  );
};

export default Views;
