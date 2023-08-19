import { RouteProps } from 'react-router-dom'

import { AboutPage, MainPage, NotFound } from '@/pages/index'
import MoviePage from '@/pages/MoviePage/MoviePage'

enum AppRoutes {
  MAIN = 'main',
  NOTFOUND = 'NotFound',
  ABOUT = 'about',
  MOVIE = 'movie',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MOVIE]: '/movie/:movieId',
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
  [AppRoutes.MOVIE]: {
    path: RoutePath.movie,
    element: <MoviePage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.NotFound,
    element: <NotFound />,
  },
}
