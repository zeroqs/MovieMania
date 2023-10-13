import { useState } from 'react'
import SwiperType from 'swiper'
import { SwiperSlide } from 'swiper/react'

import { useGetFilmByGenreQuery } from '@/entities/Film'
import { MovieCard, SliderControls, Typography } from '@/shared/ui'

import { SLIDER_OPTIONS_LANDING } from '../../lib/ComedySliderOptions'
import styles from './Comedy.module.scss'

export const Comedy = () => {
  const { data, isSuccess } = useGetFilmByGenreQuery('драма')
  const [, setActiveIndex] = useState(0)
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }
  return (
    <>
      <Typography className={styles.title} titleLevel={4} type="title">
        Драма{' '}
      </Typography>

      {isSuccess && (
        <SliderControls
          className={styles.similarMovies}
          handleSlideChange={handleSlideChange}
          renderItems={data.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard
                key={item.id}
                filmTitle={item.name}
                filmId={item.id}
                filmRating={item.rating.imdb}
              />
            </SwiperSlide>
          ))}
          sliderOptions={SLIDER_OPTIONS_LANDING}
        />
      )}
    </>
  )
}
