import { RouteProps } from 'react-router-dom'

import { AboutPage, MainPage, NotFound } from '@/pages/index'

enum AppRoutes {
  MAIN = 'main',
  NOTFOUND = 'NotFound',
  ABOUT = 'about',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOTFOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.NotFound,
    element: <NotFound />,
  },
}
