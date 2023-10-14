import { SelectProps } from 'antd'

export const genresOptions: SelectProps['options'] = [
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
export const sortOptions: SelectProps['options'] = [
  { value: 'votes.imdb', label: 'Рекомендуемые' },
  { value: 'rating.imdb', label: 'По рейтингу' },
  { value: 'year', label: 'По дате выхода' },
]
