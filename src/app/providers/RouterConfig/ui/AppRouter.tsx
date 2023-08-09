import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routeConfig } from '../config/routeConfig'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

export const AppRouter = () => {
  return (
    <Suspense fallback={<Spin indicator={antIcon} />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  )
}
