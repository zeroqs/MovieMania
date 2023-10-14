import { lazy } from 'react'

export const MainPage = lazy(() => import('./MainPage/MainPage'))
export const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'))
export const NotFound = lazy(() => import('./NotFound/NotFound'))
export const FilmPage = lazy(() => import('./MoviePage/MoviePage'))
export const PersonPage = lazy(() => import('./PersonPage/PersonPage'))
