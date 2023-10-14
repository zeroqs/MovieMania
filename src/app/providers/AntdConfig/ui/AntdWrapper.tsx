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
      headerBg: '#100f10',
      siderBg: '#100f10',
    },
    Input: {
      colorBorder: '#545454',
      colorText: '#545454',
      colorTextPlaceholder: '#545454',
    },
    Button: {
      boxShadow: 'none',
    },
    Segmented: {
      itemActiveBg: 'inherit',
      itemSelectedBg: '#ad241b',
      itemHoverColor: '#fff',
      itemColor: '#fff',
    },
    Select: {
      colorBorder: '#1c1c1f',
      colorText: '#fff',
      colorIcon: '#fff',
      colorIconHover: '#ad241b',
      colorTextLabel: 'red',
      controlItemBgActive: 'rgba(173,36,27,0.55)',
      colorTextPlaceholder: '#fff',
      multipleItemBg: 'rgba(173,36,27,0.51)',
      selectorBg: '#1c1c1f',
      optionPadding: '10px',
      optionActiveBg: 'rgba(173,36,27,0.41)',
    },
  },
  token: {
    colorPrimary: '#ad241b',
    colorInfo: '#fff',
    colorTextQuaternary: '#fff',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    colorTextDescription: '#fff',
    colorTextHeading: '#fff',
    colorBgLayout: '#100f10',
    colorBgBase: '#100f10',
  },
}

export const AntdWrapper = ({ children }: ProviderProps) => (
  <ConfigProvider theme={theme}>{children}</ConfigProvider>
)
