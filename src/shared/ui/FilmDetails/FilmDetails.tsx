import classNames from 'classnames'

// eslint-disable-next-line conarti-fsd/layers-slices
import { IFilmSlider } from '@/entities/FilmsSlider'

import { Typography } from '../Typography/Typography'
import styles from './FilmDetails.module.scss'

interface FilmDetailsProps {
  className?: string
  forSlider?: boolean
  activeIndex?: number
  movies?: IFilmSlider[]
  year?: number | string
  rating?: number | string
}

export const FilmDetails = ({
  className,
  movies,
  activeIndex,
  forSlider,
  year,
  rating,
}: FilmDetailsProps) => {
  const classes = classNames(className, styles.root)

  if (forSlider)
    return (
      <div className={classes}>
        <span className={styles.filmRating}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="imdb"
            height="30px"
          >
            <path
              fill="#DEB122"
              d="M0 22a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v20z"
            />
            <path d="M19.302 10.312c-.477 0-.798.145-1.12.492V8.57h-1.698v6.847h1.597l.102-.434c.305.365.638.524 1.12.524 1.061 0 1.19-.814 1.19-1.655v-1.928c-.002-.926-.045-1.612-1.191-1.612zm-.858 4.211a.218.218 0 0 1-.203-.129c-.118-.273-.059-2.362-.059-2.394 0-.203-.059-.68.263-.68.391 0 .333.391.333.68v1.752c-.001.289.085.771-.334.771zm-2.63-4.833c-.231-1.206-1.682-1.12-2.625-1.12h-1.318v6.847c4.613.006 4.018.321 4.018-4.419 0-.435.016-.901-.075-1.308zm-2.169 4.539V9.745c.638 0 .552.337.552.857v2.641c0 .519.101 1.002-.552.986zM5.792 8.571h2.293c.177 1.061.321 2.137.466 3.209l.407-3.209h2.304v6.847H9.725V10.79l-.622 4.629H7.999l-.654-4.527v4.527H5.792V8.571zM3.429 8.571h1.768v6.847H3.429z" />
          </svg>

          {movies![activeIndex!].rating.imdb}
        </span>
        <span>
          <Typography>{movies![activeIndex!].year}</Typography>
        </span>
      </div>
    )

  return (
    <div className={classes}>
      <span className={styles.filmRating}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="imdb"
          height="30px"
        >
          <path
            fill="#DEB122"
            d="M0 22a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v20z"
          />
          <path d="M19.302 10.312c-.477 0-.798.145-1.12.492V8.57h-1.698v6.847h1.597l.102-.434c.305.365.638.524 1.12.524 1.061 0 1.19-.814 1.19-1.655v-1.928c-.002-.926-.045-1.612-1.191-1.612zm-.858 4.211a.218.218 0 0 1-.203-.129c-.118-.273-.059-2.362-.059-2.394 0-.203-.059-.68.263-.68.391 0 .333.391.333.68v1.752c-.001.289.085.771-.334.771zm-2.63-4.833c-.231-1.206-1.682-1.12-2.625-1.12h-1.318v6.847c4.613.006 4.018.321 4.018-4.419 0-.435.016-.901-.075-1.308zm-2.169 4.539V9.745c.638 0 .552.337.552.857v2.641c0 .519.101 1.002-.552.986zM5.792 8.571h2.293c.177 1.061.321 2.137.466 3.209l.407-3.209h2.304v6.847H9.725V10.79l-.622 4.629H7.999l-.654-4.527v4.527H5.792V8.571zM3.429 8.571h1.768v6.847H3.429z" />
        </svg>
        {rating}
      </span>
      <span>
        <Typography>{year}</Typography>
      </span>
    </div>
  )
}
