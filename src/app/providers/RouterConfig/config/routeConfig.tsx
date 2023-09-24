import { RouteProps } from 'react-router-dom'

import {
  AboutPage,
  FilmPage,
  MainPage,
  NotFound,
  PersonPage,
} from '@/pages/index'

enum AppRoutes {
  MAIN = 'main',
  NOTFOUND = 'NotFound',
  ABOUT = 'about',
  MOVIE = 'movie',
  PERSON = 'person',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MOVIE]: '/movie/:movieId',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PERSON]: '/name/:personId',
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
    element: <FilmPage />,
  },
  [AppRoutes.PERSON]: {
    path: RoutePath.person,
    element: <PersonPage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.NotFound,
    element: <NotFound />,
  },
}
