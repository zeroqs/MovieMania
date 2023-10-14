import { Select, SelectProps } from 'antd'
import { useState } from 'react'
import { MdOutlineSort } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

import { useGetFilmsQuery } from '@/entities/Film'
import { Content, MovieCard } from '@/shared/ui'

import styles from './MoviesPage.module.scss'

const MoviesPage = () => {
  const genresOptions: SelectProps['options'] = [
    {
      value: 'аниме',
      label: 'Аниме',
    },
    {
      value: 'биография',
      label: 'Биография',
    },
    {
      value: 'боевик',
      label: 'Боевик',
    },
    {
      value: 'вестерн',
      label: 'Вестерн',
    },
    {
      value: 'военный',
      label: 'Военный',
    },
    {
      value: 'детектив',
      label: 'Детектив',
    },
    {
      value: 'детский',
      label: 'Детский',
    },
    {
      value: 'для взрослых',
      label: 'Для взрослых',
    },
    {
      value: 'документальный',
      label: 'Документальный',
    },
    {
      value: 'драма',
      label: 'Драма',
    },
    {
      value: 'игра',
      label: 'Игра',
    },
    {
      value: 'история',
      label: 'История',
    },
    {
      value: 'комедия',
      label: 'Комедия',
    },
    {
      value: 'концерт',
      label: 'Концерт',
    },
    {
      value: 'короткометражка',
      label: 'Короткометражка',
    },
    {
      value: 'криминал',
      label: 'Криминал',
    },
    {
      value: 'мелодрама',
      label: 'Мелодрама',
    },
    {
      value: 'музыка',
      label: 'Музыка',
    },
    {
      value: 'мультфильм',
      label: 'Мультфильм',
    },
    {
      value: 'мюзикл',
      label: 'Мюзикл',
    },
    {
      value: 'новости',
      label: 'Новости',
    },
    {
      value: 'приключения',
      label: 'Приключения',
    },
    {
      value: 'реальное ТВ',
      label: 'Реальное ТВ',
    },
    {
      value: 'семейный',
      label: 'Семейный',
    },
    {
      value: 'спорт',
      label: 'Спорт',
    },
    {
      value: 'ток-шоу',
      label: 'Ток-шоу',
    },
    {
      value: 'триллер',
      label: 'Триллер',
    },
    {
      value: 'ужасы',
      label: 'Ужасы',
    },
    {
      value: 'фантастика',
      label: 'Фантастика',
    },
    {
      value: 'фильм-нуар',
      label: 'Фильм-нуар',
    },
    {
      value: 'фэнтези',
      label: 'Фэнтези',
    },
    {
      value: 'церемония',
      label: 'Церемония',
    },
  ]
  const sortOptions: SelectProps['options'] = [
    { value: 'votes.imdb', label: 'Рекомендуемые' },
    { value: 'rating.imdb', label: 'По рейтингу' },
    { value: 'year', label: 'По дате выхода' },
  ]
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const test = searchParams.get('genre') || ''
  const [genre, setGenre] = useState(test)
  const [sort, setSort] = useState('votes.imdb')
  const handleGenre = (value: string) => {
    setGenre(value)
  }
  const handleSort = (value: string) => {
    console.log(value)

    setSort(value)
  }
  const { data, isSuccess } = useGetFilmsQuery({
    genre,
    sort,
  })

  return (
    <>
      <Content>
        <header className="controls">
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Select
              style={{ width: '13%' }}
              placeholder="Жанры"
              value={genre}
              onChange={handleGenre}
              options={genresOptions}
              showSearch={false}
            />
            <Select
              suffixIcon={<MdOutlineSort style={{ fontSize: '24px' }} />}
              style={{ width: '12%' }}
              onChange={handleSort}
              options={sortOptions}
              value={sort}
              showSearch={false}
            />
          </div>
        </header>
        <div className={styles.grid}>
          {isSuccess &&
            data.map((item, index) => (
              <MovieCard
                key={index}
                filmTitle={item.name}
                filmId={item.id}
                filmRating={item.rating.imdb}
              />
            ))}
        </div>
      </Content>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default MoviesPage
