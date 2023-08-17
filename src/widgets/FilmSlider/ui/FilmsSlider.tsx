import { Skeleton } from 'antd'

import { useGetFilmsForSlideQuery } from '@/entities/FilmsSlider'

import { FilmSlider } from './FilmSlider/FilmSlider'

export const FilmsSlider = () => {
  const { data, isSuccess, isLoading } = useGetFilmsForSlideQuery('')

  return (
    <>
      {isLoading && (
        <Skeleton.Button active block style={{ height: '300px' }} />
      )}
      {isSuccess && <FilmSlider movies={data.docs} />}
    </>
  )
}
