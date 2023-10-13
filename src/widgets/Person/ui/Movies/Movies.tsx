import classNames from 'classnames'

import { Movie } from '@/entities/Person'
import { usePagination } from '@/shared/hooks/usePagination'
import { Button, MovieCard } from '@/shared/ui'

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
          <MovieCard
            key={index}
            filmTitle={item.name}
            filmId={item.id}
            imgCache
            filmRating={item.rating || 0}
          />
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
