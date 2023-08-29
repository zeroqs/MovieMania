import 'swiper/css'
import 'swiper/css/pagination'

import { Col, Row } from 'antd'
import classNames from 'classnames'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SwiperType from 'swiper'
import { SwiperProps, SwiperSlide } from 'swiper/react'

import { useGetFilmQuery } from '@/entities/Film'
import { budgetParse } from '@/shared/lib'
import {
  Button,
  Content,
  Genres,
  Image,
  SliderControls,
  Typography,
} from '@/shared/ui'

import styles from './FilmPage.module.scss'
import { MovieSkeleton } from './Skeleton/Skeleton'

interface FilmPageProps {
  className?: string
}

const SLIDER_OPTIONS_MOVIE: SwiperProps = {
  slidesPerView: 3,
  spaceBetween: 20,
  initialSlide: 3,
  centeredSlides: false,
  breakpoints: {
    0: {
      slidesPerView: 2.2,
    },
    650: {
      slidesPerView: 3,
    },
    1330: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 6,
    },
  },
}
const SLIDER_OPTIONS_PERSONS: SwiperProps = {
  slidesPerView: 3,
  spaceBetween: 20,
  initialSlide: 0,
  centeredSlides: false,
  breakpoints: {
    0: {
      slidesPerView: 2.2,
    },
    650: {
      slidesPerView: 3,
    },
    1330: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 5,
    },
  },
}

const MoviePage = ({ className }: FilmPageProps) => {
  const { movieId } = useParams()
  const { data, isSuccess, isLoading } = useGetFilmQuery(Number(movieId))
  const [, setActiveIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const renderItemsSimilarMovies = data?.similarMovies.map((item) => (
    <SwiperSlide key={item.id} className={styles.sliderItem}>
      <Link to={`/movie/${item.id}`}>
        <Image
          className={styles.imageHover}
          skeletonWidth={300}
          skeletonHeight={400}
          src={item.poster.url}
          alt={item.name}
        />
      </Link>
    </SwiperSlide>
  ))
  const renderItemsPersons = data?.persons.map((item) => (
    <SwiperSlide key={item.id} className={styles.sliderItem}>
      <Image
        skeletonWidth={200}
        skeletonHeight={300}
        src={item.photo}
        alt={item.name}
      />
    </SwiperSlide>
  ))
  const facts = showMore
    ? data?.facts.map((item) => (
        <li key={item.value} dangerouslySetInnerHTML={{ __html: item.value }} />
      ))
    : data?.facts
        .slice(0, 4)
        .map((item) => (
          <li
            key={item.value}
            dangerouslySetInnerHTML={{ __html: item.value }}
          />
        ))
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }

  const classes = classNames(className, styles.root)
  console.log(isLoading)
  return (
    <>
      {isLoading && <MovieSkeleton />}
      {isSuccess && (
        <Content className={classes}>
          <Row gutter={29}>
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <Image
                skeletonWidth={500}
                skeletonHeight={600}
                className={styles.image}
                alt={data.name}
                src={data.poster.url}
              />
            </Col>
            <Col xs={24} sm={24} md={14} lg={13} xl={13}>
              <Typography className={styles.title} type="title">
                Название: <span className={styles.filmInfo}>{data.name}</span>
              </Typography>
              <Typography className={styles.title} type="title">
                Рейтинг:{' '}
                <span className={styles.filmInfo}>{data.rating.imdb}</span>
              </Typography>
              {data.budget.value && (
                <Typography className={styles.title} type="title">
                  Бюджет:{' '}
                  <span className={styles.filmInfo}>
                    {data.budget.currency}
                    {budgetParse(data.budget.value)}
                  </span>
                </Typography>
              )}
              <Typography className={styles.title} type="title">
                Год выхода: <span className={styles.filmInfo}>{data.year}</span>
              </Typography>
              <Typography className={styles.title} type="title">
                Описание:{' '}
                <span className={styles.filmDescription}>
                  {data.description}
                </span>
              </Typography>
              <Typography className={styles.title} type="title">
                Жанры:{' '}
                <Genres
                  className={styles.genres}
                  showCount={3}
                  genres={data.genres}
                />
              </Typography>

              <Typography className={styles.title} type="title">
                Актёры:{' '}
                <SliderControls
                  className={styles.similarMovies}
                  handleSlideChange={handleSlideChange}
                  renderItems={renderItemsPersons}
                  sliderOptions={SLIDER_OPTIONS_PERSONS}
                />
              </Typography>
            </Col>
          </Row>
          <Row className={styles.similarMoviesRow}>
            <Typography className={styles.similarMoviesTitle} type="title">
              Похожее кино:
            </Typography>
            <SliderControls
              className={styles.similarMovies}
              handleSlideChange={handleSlideChange}
              renderItems={renderItemsSimilarMovies}
              sliderOptions={SLIDER_OPTIONS_MOVIE}
            />
          </Row>
          <Row className={styles.filmFactsRow}>
            <Typography className={styles.similarMoviesTitle} type="title">
              Факты о фильме:
            </Typography>
            <div className={styles.filmFacts}>
              <ul>{facts}</ul>
            </div>
            <Button
              className={styles.showMoreButton}
              type="link"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Скрыть' : 'Показать больше'}
            </Button>
          </Row>
        </Content>
      )}
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default MoviePage
