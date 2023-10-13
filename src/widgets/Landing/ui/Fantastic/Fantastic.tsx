import { useState } from 'react'
import SwiperType from 'swiper'
import { SwiperSlide } from 'swiper/react'

import { useGetFilmByGenreQuery } from '@/entities/Film'
import { MovieCard, SliderControls, Typography } from '@/shared/ui'

import { SLIDER_OPTIONS_LANDING } from '../../lib/ComedySliderOptions'
import { loadingIcon } from '../../lib/Loading.tsx'

export const Fantastic = () => {
  const { data, isSuccess, isLoading } = useGetFilmByGenreQuery('фантастика')
  const [, setActiveIndex] = useState(0)
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }
  return (
    <div>
      <Typography titleLevel={4} type="title">
        Фантастика{' '}
      </Typography>

      {isLoading && loadingIcon}

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
