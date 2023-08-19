import classNames from 'classnames'
import { useParams } from 'react-router-dom'

import { useGetFilmQuery } from '@/entities/Film'

import styles from './FilmPage.module.scss'

interface FilmPageProps {
  className?: string
}

const MoviePage = ({ className }: FilmPageProps) => {
  const { movieId } = useParams()
  const { data } = useGetFilmQuery(Number(movieId))
  const classes = classNames(className, styles.root)
  console.log(data)
  return (
    <div className={classes}>
      <h1>film page</h1>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default MoviePage
