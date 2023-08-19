import classNames from 'classnames'

// eslint-disable-next-line conarti-fsd/layers-slices
import { Genres as IGenres, IFilmSlider } from '@/entities/FilmsSlider'

import { Typography } from '../Typography/Typography'
import styles from './Genres.module.scss'

interface GenresProps {
  className?: string
  genres?: IGenres[]
  movies?: IFilmSlider[]
  showCount: number
  forSlider?: boolean
  activeIndex?: number
}

export const Genres = ({
  className,
  movies,
  showCount,
  forSlider = false,
  activeIndex,
  genres,
}: GenresProps) => {
  const classes = classNames(className, styles.root)

  if (forSlider)
    return (
      <div className={classes}>
        {movies![activeIndex!].genres.slice(0, showCount).map((item) => (
          <Typography key={item.name}>{item.name}</Typography>
        ))}
      </div>
    )

  return (
    <div className={classes}>
      {genres!.slice(0, showCount).map((item) => (
        <Typography key={item.name}>{item.name}</Typography>
      ))}
    </div>
  )
}
