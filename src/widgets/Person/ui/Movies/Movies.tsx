import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { Movie } from '@/entities/Person'
import { usePagination } from '@/shared/hooks/usePagination.ts'
import { Button, Image } from '@/shared/ui'

import { Rating } from '../Rating/Rating'
import styles from './Movies.module.scss'

interface MoviesProps {
  className?: string
  movies: Movie[]
}

export const Movies = ({ className, movies }: MoviesProps) => {
  const classes = classNames(className, styles.root)
  const { sortedArray, changePaginationValue, pagination } = usePagination(
    movies,
    10,
    [
      (arr) => arr.filter((item) => item.name),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (arr) => arr.sort((a, b) => b.rating - a.rating),
    ],
  )

  if (sortedArray.length === 0) {
    return <></>
  }

  return (
    <div className={classes}>
      <div className={styles.grid}>
        {sortedArray.map((item, index) => (
          <Link key={index} to={`/movie/${item.id}`} className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                key={index}
                className={styles.imageItem}
                src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${
                  item.id
                }.jpg?${Date.now()}`}
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
      {movies.length > pagination && (
        <Button
          size="large"
          className={styles.showMore}
          onClick={changePaginationValue}
        >
          Показать больше
        </Button>
      )}
    </div>
  )
}
