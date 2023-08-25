import { LoadingOutlined } from '@ant-design/icons'
import { Layout, Spin } from 'antd'
import { Suspense, useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Header, Sider } from '@/widgets'

import { routeConfig } from '../config/routeConfig'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

export const AppRouter = () => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname, window.location])
  return (
    <Layout style={{ minHeight: '100dvh' }}>
      <Sider />
      <Layout>
        <Header />
        <Suspense fallback={<Spin indicator={antIcon} />}>
          <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
              <Route key={path} element={element} path={path} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </Layout>
  )
}
