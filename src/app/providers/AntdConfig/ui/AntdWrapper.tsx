import { ConfigProvider, ThemeConfig } from 'antd'

import { ProviderProps } from '@/shared/types/types'

const theme: ThemeConfig = {
  components: {
    Menu: {
      darkItemBg: '#100f10',
      colorBgBase: '#100f10',
      colorBgContainer: '#100f10',
      colorBgLayout: '#100f10',
      itemMarginBlock: '40px',
      itemHeight: 50,
      borderRadiusLG: 40,
      fontSize: 18,
    },
    Layout: {
      colorText: '#fff',
      colorBgHeader: '#100f10',
    },
  },
  token: {
    colorPrimary: '#ad241b',
    colorInfo: '#fff',
    fontFamily: '"SF Pro Display", sans-serif',
    fontSize: 16,
    colorTextDescription: '#fff',
    colorTextHeading: '#fff',
    colorBgLayout: '#100f10',
    colorBgBase: '#141313',
  },
}

export const AntdWrapper = ({ children }: ProviderProps) => (
  <ConfigProvider theme={theme}>{children}</ConfigProvider>
)
