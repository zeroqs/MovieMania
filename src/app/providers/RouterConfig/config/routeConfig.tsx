import { RouteProps } from 'react-router-dom'

import {
  FilmPage,
  MainPage,
  MoviesPage,
  NotFound,
  PersonPage,
} from '@/pages/index'

enum AppRoutes {
  MAIN = 'main',
  NOTFOUND = 'NotFound',
  MOVIES = 'movies',
  MOVIE = 'movie',
  PERSON = 'person',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MOVIE]: '/movie/:movieId',
  [AppRoutes.MOVIES]: '/movies',
  [AppRoutes.PERSON]: '/name/:personId',
  [AppRoutes.NOTFOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.MOVIES]: {
    path: RoutePath.movies,
    element: <MoviesPage />,
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
