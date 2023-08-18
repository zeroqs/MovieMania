import classNames from 'classnames'
import { useState } from 'react'
import SwiperType from 'swiper'

import { IFilmSlider } from '@/entities/FilmsSlider'
import { Button, FilmSliderLayout, Typography } from '@/shared/ui'

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
        <div className={styles.filmDetails}>
          <span className={styles.filmRating}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="imdb"
              height="30px"
            >
              <path
                fill="#DEB122"
                d="M0 22a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v20z"
              />
              <path d="M19.302 10.312c-.477 0-.798.145-1.12.492V8.57h-1.698v6.847h1.597l.102-.434c.305.365.638.524 1.12.524 1.061 0 1.19-.814 1.19-1.655v-1.928c-.002-.926-.045-1.612-1.191-1.612zm-.858 4.211a.218.218 0 0 1-.203-.129c-.118-.273-.059-2.362-.059-2.394 0-.203-.059-.68.263-.68.391 0 .333.391.333.68v1.752c-.001.289.085.771-.334.771zm-2.63-4.833c-.231-1.206-1.682-1.12-2.625-1.12h-1.318v6.847c4.613.006 4.018.321 4.018-4.419 0-.435.016-.901-.075-1.308zm-2.169 4.539V9.745c.638 0 .552.337.552.857v2.641c0 .519.101 1.002-.552.986zM5.792 8.571h2.293c.177 1.061.321 2.137.466 3.209l.407-3.209h2.304v6.847H9.725V10.79l-.622 4.629H7.999l-.654-4.527v4.527H5.792V8.571zM3.429 8.571h1.768v6.847H3.429z" />
            </svg>

            {movies[activeIndex].rating.imdb}
          </span>
          <span>{movies[activeIndex].year}</span>
        </div>
        <div className={styles.genres}>
          {movies[activeIndex].genres.slice(0, 3).map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </div>
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
