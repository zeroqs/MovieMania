import { Col, Row } from 'antd'
import classNames from 'classnames'

import { Content, Genres, Typography } from '@/shared/ui'

/*import { useParams } from 'react-router-dom'

import { useGetFilmQuery } from '@/entities/Film'*/
import styles from './FilmPage.module.scss'

interface FilmPageProps {
  className?: string
}

const genres = [
  {
    name: 'драма',
  },
  {
    name: 'комедия',
  },
  {
    name: 'биография',
  },
]

const MoviePage = ({ className }: FilmPageProps) => {
  /*  const { movieId } = useParams()
                                                                                                                                                    const { data } = useGetFilmQuery(Number(movieId))*/
  const classes = classNames(className, styles.root)
  return (
    <Content className={classes}>
      <Row gutter={29}>
        <Col xs={24} sm={12} md={12} lg={12} xl={9}>
          <img
            src="https://st.kp.yandex.net/images/film_big/535341.jpg"
            className={styles.image}
            alt=""
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={15}>
          <Typography className={styles.title} type="title">
            Название: <span className={styles.filmInfo}>1+1</span>
          </Typography>
          <Typography className={styles.title} type="title">
            Рейтинг: <span className={styles.filmInfo}>7.8</span>
          </Typography>
          <Typography className={styles.title} type="title">
            Бюджет: <span className={styles.filmInfo}>30.000</span>
          </Typography>
          <Typography className={styles.title} type="title">
            Год выхода: <span className={styles.filmInfo}>2011</span>
          </Typography>
          <Typography className={styles.title} type="title">
            Описание:{' '}
            <span className={styles.filmDescription}>
              Пострадав в результате несчастного случая, богатый аристократ
              Филипп нанимает в помощники человека, который менее всего подходит
              для этой работы, – молодого жителя предместья Дрисса, только что
              освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к
              инвалидному креслу, Дриссу удается привнести в размеренную жизнь
              аристократа дух приключений.
            </span>
          </Typography>
          <Typography className={styles.title} type="title">
            Жанры:{' '}
            <Genres className={styles.genres} showCount={3} genres={genres} />
          </Typography>
        </Col>
      </Row>
    </Content>
  )
}

// eslint-disable-next-line import/no-default-export
export default MoviePage
