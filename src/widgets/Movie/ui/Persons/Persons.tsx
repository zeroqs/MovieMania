import { useState } from 'react'
import { Link } from 'react-router-dom'
import SwiperType from 'swiper'
import { SwiperSlide } from 'swiper/react'

import { Person } from '@/entities/Film'
import { Image, SliderControls, Typography } from '@/shared/ui'

import { SLIDER_OPTIONS_PERSONS } from '../../lib/SliderOptionPersons'
import styles from './Persons.module.scss'

interface PersonsProps {
  persons: Person[]
}

export const Persons = ({ persons }: PersonsProps) => {
  const [, setActiveIndex] = useState(0)

  const renderItemsPersons = persons.map((item) => (
    <SwiperSlide key={item.id} className={styles.sliderItem}>
      <Link to={`/person/${item.id}`}>
        <Image
          className={styles.imageHover}
          skeletonWidth={200}
          skeletonHeight={300}
          src={item.photo}
          alt={item.name}
        />
      </Link>
    </SwiperSlide>
  ))
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }
  return (
    <>
      <Typography className={styles.title} titleLevel={3} type="title">
        Актёры:{' '}
      </Typography>

      <SliderControls
        className={styles.similarMovies}
        handleSlideChange={handleSlideChange}
        renderItems={renderItemsPersons}
        sliderOptions={SLIDER_OPTIONS_PERSONS}
      />
    </>
  )
}
