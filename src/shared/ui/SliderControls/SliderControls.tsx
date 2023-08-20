import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import SwiperType from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

import { SimilarMovie } from '@/entities/Film'
import { IFilmSlider } from '@/entities/FilmsSlider'
import { useSwiperNavigation } from '@/shared/lib/useSwiperNavigation'
import { Button } from '@/shared/ui'

import styles from './SliderControls.module.scss'

interface SliderControlsProps {
  className?: string
  handleSlideChange: (swiper: SwiperType) => void
  movies?: IFilmSlider[]
  similarMovies?: SimilarMovie[]
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

const SLIDER_OPTIONS_MOVIE: SwiperProps = {
  slidesPerView: 3,
  spaceBetween: 20,
  initialSlide: 2,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    650: {
      slidesPerView: 2,
    },
    1330: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 5,
    },
  },
}

export const SliderControls = ({
  className,
  handleSlideChange,
  movies,
  similarMovies,
}: SliderControlsProps) => {
  const { onSwiper, nextBtnRef, prevBtnRef } = useSwiperNavigation()
  const classes = classNames(className, styles.root)

  if (similarMovies) {
    return (
      <div className={classes}>
        <Swiper
          {...SLIDER_OPTIONS_MOVIE}
          onSwiper={onSwiper}
          onSlideChange={handleSlideChange}
        >
          {similarMovies.map((item) => (
            <SwiperSlide key={item.id} className={styles.sliderItem}>
              <img src={item.poster.url} alt={item.name} />
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
    )
  }

  return (
    <div className={classes}>
      <Swiper
        onSwiper={onSwiper}
        onSlideChange={handleSlideChange}
        {...SLIDER_OPTIONS}
      >
        {movies!.map((item) => (
          <SwiperSlide key={item.id} className={styles.sliderItem}>
            <img src={item.backdrop.url} alt={item.name} />
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
  )
}
