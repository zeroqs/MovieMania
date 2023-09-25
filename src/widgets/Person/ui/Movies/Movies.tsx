import classNames from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Movie } from '@/entities/Person'
import { Button, Image } from '@/shared/ui'

import { Rating } from '../Rating/Rating'
import styles from './Movies.module.scss'

interface MoviesProps {
  className?: string
  movies: Movie[]
}

export const Movies = ({ className, movies }: MoviesProps) => {
  const classes = classNames(className, styles.root)
  const [pagination, setPagination] = useState(10)
  const movie = movies
    .filter((item) => item.name)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .sort((a, b) => b.rating - a.rating)
    .slice(0, pagination)

  const showMore = () => {
    setPagination((prevState) => prevState + 10)
  }

  return (
    <div className={classes}>
      <div className={styles.grid}>
        {movie.map((item, index) => (
          <Link key={index} to={`/movie/${item.id}`} className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                key={index}
                className={styles.imageItem}
                src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${item.id}.jpg`}
                alt={item.name}
              />
            </div>
            <div className={styles.content}>
              <Rating className={styles.rating} rating={item.rating} />
              <h3>{item.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Button size="large" className={styles.showMore} onClick={showMore}>
        Показать больше
      </Button>
    </div>
  )
}
