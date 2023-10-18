import { Select } from 'antd'
import { useState } from 'react'
import { MdOutlineSort } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

import { useGetFilmsQuery } from '@/entities/Film'
import { Button, MovieCard } from '@/shared/ui'

import { genresOptions, sortOptions } from './lib/options'
import styles from './Movies.module.scss'

export const Movies = () => {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const test = searchParams.get('genre') || 'Жанры'
  const [genre, setGenre] = useState(test)
  const [sort, setSort] = useState('votes.imdb')
  const [pagination, setPagination] = useState(30)
  const handleGenre = (value: string) => {
    setGenre(value)
  }
  const handleSort = (value: string) => {
    setSort(value)
  }
  const { data, isSuccess, isFetching } = useGetFilmsQuery({
    genre: genre !== 'Жанры' ? genre : '',
    sort,
    pagination,
  })

  console.log(isFetching)

  return (
    <>
      <header className="controls">
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <Select
            style={{ width: '180px' }}
            value={genre}
            placeholder="Жанры"
            onChange={handleGenre}
            options={genresOptions}
            showSearch={false}
          />
          <Select
            suffixIcon={<MdOutlineSort style={{ fontSize: '24px' }} />}
            style={{ width: '200px' }}
            onChange={handleSort}
            options={sortOptions}
            value={sort}
            showSearch={false}
          />
        </div>
      </header>
      <div className={styles.grid}>
        {!isFetching &&
          isSuccess &&
          data.map((item, index) => (
            <MovieCard
              key={index}
              filmTitle={item.name}
              filmId={item.id}
              filmRating={item.rating.imdb}
            />
          ))}
        {isFetching &&
          Array.from({ length: 10 }, (_, index) => (
            <div key={index} className={styles.loadingCard}>
              <MovieCard
                isLoading={isFetching}
                filmTitle="te"
                filmId={2}
                filmRating={2}
              />
            </div>
          ))}
      </div>
      <Button onClick={() => setPagination((prevState) => (prevState += 30))}>
        Показать больше
      </Button>
    </>
  )
}
