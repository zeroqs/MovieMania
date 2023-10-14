import { useState } from 'react'
import { Link } from 'react-router-dom'
import SwiperType from 'swiper'
import { SwiperSlide } from 'swiper/react'

import { SliderControls, Typography } from '@/shared/ui'

import { genres, SLIDER_OPTIONS } from '../../lib/GenresSliderOptions'
import styles from './GenresSlider.module.scss'

export const GenresSlider = () => {
  const [, setActiveIndex] = useState(0)

  const renderItems = genres.map((item) => (
    <SwiperSlide key={item.name}>
      <Link to={`/movies?genre=${item.name.toLowerCase()}`}>
        <Typography key={item.name} className={styles.root}>
          {item.name}
          {item.icon}
        </Typography>
      </Link>
    </SwiperSlide>
  ))

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <SliderControls
      controls={false}
      handleSlideChange={handleSlideChange}
      renderItems={renderItems}
      sliderOptions={SLIDER_OPTIONS}
    />
  )
}
