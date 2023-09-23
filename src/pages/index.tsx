import { lazy } from 'react'

export const MainPage = lazy(() => import('./MainPage/MainPage'))
export const AboutPage = lazy(() => import('./AboutPage/AboutPage'))
export const NotFound = lazy(() => import('./NotFound/NotFound'))
export const FilmPage = lazy(() => import('./MoviePage/MoviePage'))
export const PersonPage = lazy(() => import('./PersonPage/PersonPage'))
