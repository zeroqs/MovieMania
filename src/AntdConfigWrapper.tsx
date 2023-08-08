import { ConfigProvider, ThemeConfig } from 'antd'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#836fff',
    colorInfo: '#836fff',
    fontFamily: '"SF Pro Display", sans-serif',
    fontSize: 16,
  },
}

export const AntdConfigWrapper = ({ children }: Props) => (
  <ConfigProvider theme={theme}>{children}</ConfigProvider>
)
