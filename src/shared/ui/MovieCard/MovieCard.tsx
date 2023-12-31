import { Skeleton } from 'antd'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

// eslint-disable-next-line conarti-fsd/layers-slices
import { Rating } from '@/widgets/Person/ui/Rating/Rating'

import { Image } from '../Image/Image'
import styles from './MovieCard.module.scss'

interface MovieCardProps {
  className?: string
  filmTitle: string
  filmId: number
  filmRating: number
  imgCache?: boolean
  isLoading?: boolean
}

export const MovieCard = ({
  className,
  filmId,
  filmTitle,
  filmRating,
  imgCache = false,
  isLoading = false,
}: MovieCardProps) => {
  const classes = classNames(className, styles.root)
  const isCached = imgCache ? Date.now() : ''

  if (isLoading) {
    return (
      <div className={classes}>
        <Skeleton.Button
          className={styles.imageWrapperLoading}
          active
          size="large"
          shape="square"
          block
        />
      </div>
    )
  }

  return (
    <Link key={filmId} to={`/movie/${filmId}`} className={classes}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.imageItem}
          src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${filmId}.jpg?${isCached}`}
          alt={filmTitle}
        />
      </div>
      <div className={styles.content}>
        <Rating className={styles.rating} rating={filmRating} />
        <h3>{filmTitle}</h3>
      </div>
    </Link>
  )
}
