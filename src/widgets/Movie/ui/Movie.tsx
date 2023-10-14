import { Row } from 'antd'
import classNames from 'classnames'
import { useParams } from 'react-router-dom'

import { useGetFilmQuery } from '@/entities/Film'
import { Content } from '@/shared/ui'

import styles from './Movie.module.scss'
import { MovieFacts } from './MovieFacts/MovieFacts'
import { MovieInfo } from './MovieInfo/MovieInfo'
import { MovieSkeleton } from './MovieSkeleton/MovieSkeleton'
import { Persons } from './Persons/Persons'
import { Poster } from './Poster/Poster'
import { SimilarMovie } from './SimilarMovie/SimilarMovie'

interface MovieProps {
  className?: string
}

export const Movie = ({ className }: MovieProps) => {
  const { movieId } = useParams()
  const classes = classNames(className, styles.root)
  const { data, isLoading, isError, isSuccess } = useGetFilmQuery(
    Number(movieId),
  )

  if (isLoading) return <MovieSkeleton />
  if (isError) return <h1>Error fetch</h1>
  const posterUrl = data?.poster
    ? data.poster.url
    : 'https://st.kp.yandex.net/images/no-poster.gif'
  return (
    <>
      {isSuccess && (
        <Content className={classes}>
          <Row gutter={29}>
            <Poster alt={data.name} src={posterUrl} />
            <MovieInfo
              genres={data.genres}
              name={data.name}
              year={data.year}
              rating={data.rating.imdb}
              description={data.description}
              budget={data.budget}
              personsDesktop={<Persons persons={data.persons} />}
            />
          </Row>
          {data.similarMovies.length > 0 && (
            <Row className={styles.similarMoviesRow}>
              <SimilarMovie similarMovies={data.similarMovies} />
            </Row>
          )}
          <Row className={styles.persons}>
            <Persons persons={data.persons} />
          </Row>
          {data.facts && (
            <Row className={styles.filmFactsRow}>
              <MovieFacts facts={data.facts} />
            </Row>
          )}
        </Content>
      )}
    </>
  )
}
