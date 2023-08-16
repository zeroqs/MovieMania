import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { useState } from 'react'
import SwiperType from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

import { Button } from '@/shared/ui'

import { useSwiperNavigation } from '../lib/useSwiperNavigation'
import styles from './FilmSlider.module.scss'

interface FilmSliderProps {
  className?: string
}

const movies = [
  {
    title: '1+1',
    year: 2011,
    image: 'https://imagetmdb.com/t/p/original/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg',
    shortDescription:
      'Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си',
  },
  {
    title: 'Джентльмены',
    year: 2019,
    image: 'https://imagetmdb.com/t/p/original/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg',
    shortDescription:
      'Наркобарон хочет уйти на покой, но криминальный мир не отпускает. Успешное возвращение Гая Ричи к корням',
  },
  {
    title: 'Волк с Уолл-стрит',
    year: 2013,
    image: 'https://imagetmdb.com/t/p/original/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg',
    shortDescription:
      'Восхождение циника-гедониста на бизнес-олимп 1980-х. Блистательный тандем Леонардо ДиКаприо и Мартина Скорсезе',
  },
  {
    title: 'Гнев человеческий',
    year: 2021,
    image:
      'https://avatars.mds.yandex.net/get-ott/1534341/2a0000017b0699c684cc6e9767efb6d4b678/orig',
    shortDescription:
      'Хмурый мужчина прикидывается инкассатором, чтобы выйти на грабителей. Гай Ричи и Джейсон Стэйтем снова вместе',
  },
]

const SLIDER_OPTIONS: SwiperProps = {
  slidesPerView: 2,
  spaceBetween: 20,
  initialSlide: 2,
  centeredSlides: true,
}

export const FilmSlider = ({ className }: FilmSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { onSwiper, nextBtnRef, prevBtnRef } = useSwiperNavigation()

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }
  const classes = classNames(className, styles.root)

  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${movies[activeIndex]?.image}) `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}
      className={classes}
    >
      <header className={styles.title}>
        <h1>{movies[activeIndex]?.title}</h1>
        <div className={styles.filmDetails}>
          <span>7.8</span>
          <span>Жанры</span>
          <span>{movies[activeIndex]?.year}</span>
        </div>
      </header>
      <main className={styles.main}>
        <span>{movies[activeIndex]?.shortDescription}</span>
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
            {movies.map((movie) => (
              <SwiperSlide key={movie.title} className={styles.sliderItem}>
                <img src={movie.image} alt="" />
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
