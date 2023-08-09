import { ConfigProvider, ThemeConfig } from 'antd'

import { ProviderProps } from '@/shared/types/types'

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#ad241b',
    colorInfo: '#836fff',
    fontFamily: '"SF Pro Display", sans-serif',
    fontSize: 16,
  },
}

export const AntdWrapper = ({ children }: ProviderProps) => (
  <ConfigProvider theme={theme}>{children}</ConfigProvider>
)
