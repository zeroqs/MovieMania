import { Skeleton } from 'antd'
import classNames from 'classnames'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SwiperType from 'swiper'
import { SwiperProps, SwiperSlide } from 'swiper/react'

import { IFilmSlider } from '@/entities/FilmsSlider'
import {
  Button,
  FilmDetails,
  FilmSliderLayout,
  Genres,
  Image,
  SliderControls,
  Typography,
} from '@/shared/ui'

import styles from './FilmSlider.module.scss'

interface FilmSliderProps {
  className?: string
  movies: IFilmSlider[]
  onLoadLayout: () => void
  isLoadingLayout: boolean
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
export const FilmSlider = ({
  className,
  movies,
  onLoadLayout,
  isLoadingLayout,
}: FilmSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const renderItems = movies.map((item) => (
    <SwiperSlide key={item.id} className={styles.sliderItem}>
      <Image src={item.backdrop.url} alt={item.name} skeletonWidth={100} />
    </SwiperSlide>
  ))

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }

  const classes = classNames(className, styles.root)
  return (
    <>
      {isLoadingLayout && (
        <Skeleton.Button active block style={{ height: '300px' }} />
      )}
      <FilmSliderLayout
        onLoadLayout={onLoadLayout}
        bgImage={movies[activeIndex].backdrop.url}
        className={classes}
      >
        <header className={styles.title}>
          <Typography type="title">{movies[activeIndex].name}</Typography>
          <FilmDetails forSlider activeIndex={activeIndex} movies={movies} />
          <Genres
            showCount={3}
            forSlider
            movies={movies}
            activeIndex={activeIndex}
          />
        </header>
        <main className={styles.main}>
          <Typography className={styles.shortDescription}>
            {movies[activeIndex].shortDescription}
          </Typography>
        </main>
        <footer className={styles.footer}>
          <div className={styles.leftSide}>
            <NavLink to={`/movie/${movies[activeIndex].id}`}>
              <Button className={styles.buttonDetails}>Подробнее</Button>
            </NavLink>
          </div>
          <SliderControls
            sliderOptions={SLIDER_OPTIONS}
            handleSlideChange={handleSlideChange}
            renderItems={renderItems}
            className={styles.rightSide}
          />
        </footer>
      </FilmSliderLayout>
    </>
  )
}
