import classNames from 'classnames'
import { useState } from 'react'
import SwiperType from 'swiper'

import { IFilmSlider } from '@/entities/FilmsSlider'
import {
  Button,
  FilmDetails,
  FilmSliderLayout,
  Genres,
  Typography,
} from '@/shared/ui'

import { SliderControls } from '../SliderControls/SliderControls'
import styles from './FilmSlider.module.scss'

interface FilmSliderProps {
  className?: string
  movies: IFilmSlider[]
}

export const FilmSlider = ({ className, movies }: FilmSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }

  const classes = classNames(className, styles.root)
  return (
    <FilmSliderLayout
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
        <Typography>{movies[activeIndex].shortDescription}</Typography>
      </main>
      <footer className={styles.footer}>
        <div className={styles.leftSide}>
          <Button className={styles.buttonDetails}>Details</Button>
        </div>
        <SliderControls
          handleSlideChange={handleSlideChange}
          movies={movies}
          className={styles.rightSide}
        />
      </footer>
    </FilmSliderLayout>
  )
}
