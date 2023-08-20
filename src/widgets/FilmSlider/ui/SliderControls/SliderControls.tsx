import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import SwiperType from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

import { IFilmSlider } from '@/entities/FilmsSlider'
import { Button } from '@/shared/ui'

import { useSwiperNavigation } from '../../lib/useSwiperNavigation'
import styles from './SliderControls.module.scss'

interface SliderControlsProps {
  className?: string
  handleSlideChange: (swiper: SwiperType) => void
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

export const SliderControls = ({
  className,
  handleSlideChange,
  movies,
}: SliderControlsProps) => {
  const { onSwiper, nextBtnRef, prevBtnRef } = useSwiperNavigation()
  const classes = classNames(className, styles.root)

  return (
    <div className={classes}>
      <Swiper
        onSwiper={onSwiper}
        onSlideChange={handleSlideChange}
        {...SLIDER_OPTIONS}
      >
        {movies.map((item) => (
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
