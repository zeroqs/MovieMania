import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { useState } from 'react'
import SwiperType from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

import { IFilmSlider } from '@/entities/movie'
import { Button } from '@/shared/ui'

import { useSwiperNavigation } from '../lib/useSwiperNavigation'
import styles from './FilmSlider.module.scss'

interface FilmSliderProps {
  className?: string
  movies: IFilmSlider[]
}

const SLIDER_OPTIONS: SwiperProps = {
  slidesPerView: 3,
  spaceBetween: 20,
  initialSlide: 2,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1.4,
    },
    1000: {
      slidesPerView: 3,
    },
  },
}

export const FilmSlider = ({ className, movies }: FilmSliderProps) => {
  const { onSwiper, nextBtnRef, prevBtnRef } = useSwiperNavigation()
  const [activeIndex, setActiveIndex] = useState(0)
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }
  const classes = classNames(className, styles.root)

  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${movies[activeIndex].backdrop.url}) `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}
      className={classes}
    >
      <header className={styles.title}>
        <h1>{movies[activeIndex].name}</h1>
        <div className={styles.filmDetails}>
          <span>7.8</span>
          <span>Жанры</span>
          <span>{movies[activeIndex].year}</span>
        </div>
      </header>
      <main className={styles.main}>
        <span>{movies[activeIndex].shortDescription}</span>
      </main>
      <footer className={styles.footer}>
        <div className={styles.leftSide}>
          <Button style={{ padding: '25px 30px', borderRadius: '25px' }}>
            Details
          </Button>
        </div>

        <div className={styles.rightSide}>
          <Swiper
            onSwiper={onSwiper}
            onSlideChange={handleSlideChange}
            {...SLIDER_OPTIONS}
            className={styles.swiper}
          >
            {movies.map((item) => (
              <SwiperSlide key={item.id} className={styles.sliderItem}>
                <img src={item.backdrop.previewUrl} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button className={styles.prev} buttonRef={prevBtnRef}>
            <LeftOutlined style={{ fontSize: 11 }} />
          </Button>
          <Button className={styles.next} buttonRef={nextBtnRef}>
            <RightOutlined style={{ fontSize: 11 }} />
          </Button>
        </div>
      </footer>
    </div>
  )
}
