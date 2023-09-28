import { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import SwiperType from 'swiper'
import { SwiperSlide } from 'swiper/react'

import { SimilarMovie as SimilarMovieDto } from '@/entities/Film'
import { Image, SliderControls, Typography } from '@/shared/ui'

import { SLIDER_OPTIONS_MOVIE } from '../../lib/SliderOptionsSimilarMovie'
import styles from './SimilarMovie.module.scss'

interface SimilarMovieProps {
  children?: ReactNode
  similarMovies: SimilarMovieDto[]
}

export const SimilarMovie = ({ similarMovies }: SimilarMovieProps) => {
  const [, setActiveIndex] = useState(0)

  const renderItemsSimilarMovies = similarMovies.map((item, index) => (
    <SwiperSlide key={index} className={styles.sliderItem}>
      <Link to={`/movie/${item.id}`}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.imageHover}
            skeletonWidth={300}
            skeletonHeight={400}
            src={item.poster.url}
            alt={item.name}
          />
        </div>
      </Link>
    </SwiperSlide>
  ))
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }
  return (
    <>
      <Typography className={styles.title} titleLevel={3} type="title">
        Похожее кино:
      </Typography>

      <SliderControls
        className={styles.similarMovies}
        handleSlideChange={handleSlideChange}
        renderItems={renderItemsSimilarMovies}
        sliderOptions={SLIDER_OPTIONS_MOVIE}
      />
    </>
  )
}
