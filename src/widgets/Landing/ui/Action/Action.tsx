import { useState } from 'react'
import SwiperType from 'swiper'
import { SwiperSlide } from 'swiper/react'

import { useGetFilmByGenreQuery } from '@/entities/Film'
import { MovieCard, SliderControls, Typography } from '@/shared/ui'

import { SLIDER_OPTIONS_LANDING } from '../../lib/ComedySliderOptions'

export const Action = () => {
  const { data, isSuccess } = useGetFilmByGenreQuery('боевик')
  const [, setActiveIndex] = useState(0)
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }
  return (
    <div>
      <Typography titleLevel={4} type="title">
        Боевик{' '}
      </Typography>

      {isSuccess && (
        <SliderControls
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
    </div>
  )
}
