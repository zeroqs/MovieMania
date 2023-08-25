import 'swiper/css'
import 'swiper/css/pagination'

import { Col, Row } from 'antd'
import classNames from 'classnames'
import { useState } from 'react'
import SwiperType from 'swiper'
import { SwiperProps, SwiperSlide } from 'swiper/react'

import {
  Button,
  Content,
  Genres,
  SliderControls,
  Typography,
} from '@/shared/ui'

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

const similarMovies = [
  {
    id: 32898,
    name: 'Достучаться до небес',
    enName: null,
    alternativeName: "Knockin' on Heaven's Door",
    type: 'movie',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/3fb781cd-2b98-4072-b102-311661121a2e/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/3fb781cd-2b98-4072-b102-311661121a2e/x1000',
    },
  },
  {
    id: 84014,
    name: '…А в душе я танцую',
    enName: null,
    alternativeName: "Inside I'm Dancing",
    type: 'movie',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/3623db7c-3c94-4cff-841a-bb2f2d30b9ea/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/3623db7c-3c94-4cff-841a-bb2f2d30b9ea/x1000',
    },
  },
  {
    id: 4871,
    name: 'Запах женщины',
    enName: null,
    alternativeName: 'Scent of a Woman',
    type: 'movie',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/378890fe-a68d-45ba-a87e-9108ae0e4574/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/378890fe-a68d-45ba-a87e-9108ae0e4574/x1000',
    },
  },
  {
    id: 258885,
    name: 'Пока не сыграл в ящик',
    enName: null,
    alternativeName: 'The Bucket List',
    type: 'movie',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/7155a924-ac60-4a34-8b0f-56dff6a012f6/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/7155a924-ac60-4a34-8b0f-56dff6a012f6/x1000',
    },
  },
  {
    id: 519,
    name: 'Человек дождя',
    enName: null,
    alternativeName: 'Rain Man',
    type: 'movie',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/74259ac0-8003-4282-b0c9-ffe915ccd6fb/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/74259ac0-8003-4282-b0c9-ffe915ccd6fb/x1000',
    },
  },
  {
    id: 77435,
    name: 'Скафандр и бабочка',
    enName: null,
    alternativeName: 'Le scaphandre et le papillon',
    type: 'movie',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/2df74ce4-1542-41b5-a302-39aa7426e65c/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/2df74ce4-1542-41b5-a302-39aa7426e65c/x1000',
    },
  },
  {
    id: 1108577,
    name: 'Зеленая книга',
    enName: null,
    alternativeName: 'Green Book',
    type: 'movie',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837/x1000',
    },
  },
  {
    id: 807318,
    name: 'До встречи с тобой',
    enName: null,
    alternativeName: 'Me Before You',
    type: 'movie',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/833bf19b-d1e6-4ce2-80c8-eb5971e61ab0/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/833bf19b-d1e6-4ce2-80c8-eb5971e61ab0/x1000',
    },
  },
  {
    id: 462515,
    name: 'Жизнь прекрасна',
    enName: null,
    alternativeName: '50/50',
    type: 'movie',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/2b5e57a6-535f-4461-a534-6bb811d28233/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/2b5e57a6-535f-4461-a534-6bb811d28233/x1000',
    },
  },
  {
    id: 2950,
    name: 'Пробуждение',
    enName: null,
    alternativeName: 'Awakenings',
    type: 'movie',
    poster: {
      url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/42ad912d-cee7-45ad-b5f7-6a6df3ded047/orig',
      previewUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/42ad912d-cee7-45ad-b5f7-6a6df3ded047/x1000',
    },
  },
]

const persons = [
  {
    id: 71427,
    photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_71427.jpg',
    name: 'Франсуа Клюзе',
    enName: 'François Cluzet',
    description: 'Philippe',
    profession: 'актеры',
    enProfession: 'actor',
  },
  {
    id: 41644,
    photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_41644.jpg',
    name: 'Омар Си',
    enName: 'Omar Sy',
    description: 'Driss',
    profession: 'актеры',
    enProfession: 'actor',
  },
  {
    id: 57174,
    photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_57174.jpg',
    name: 'Анн Ле Ни',
    enName: 'Anne Le Ny',
    description: 'Yvonne',
    profession: 'актеры',
    enProfession: 'actor',
  },
  {
    id: 868557,
    photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_868557.jpg',
    name: 'Одри Флеро',
    enName: 'Audrey Fleurot',
    description: 'Magalie',
    profession: 'актеры',
    enProfession: 'actor',
  },
  {
    id: 541041,
    photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_541041.jpg',
    name: 'Жозефин де Мо',
    enName: 'Joséphine de Meaux',
    description: 'La DRH société de courses',
    profession: 'актеры',
    enProfession: 'actor',
  },
  {
    id: 445,
    photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_445.jpg',
    name: 'Клотильд Молле',
    enName: 'Clotilde Mollet',
    description: 'Marcelle',
    profession: 'актеры',
    enProfession: 'actor',
  },
  {
    id: 964574,
    photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_964574.jpg',
    name: 'Альба Гайя Крагеде Беллуджи',
    enName: 'Alba Gaïa Bellugi',
    description: 'Elisa',
    profession: 'актеры',
    enProfession: 'actor',
  },
  {
    id: 2237576,
    photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_2237576.jpg',
    name: 'Сирил Менди',
    enName: 'Cyril Mendy',
    description: null,
    profession: 'актеры',
    enProfession: 'actor',
  },
  {
    id: 3084679,
    photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3084679.jpg',
    name: 'Салимата Камате',
    enName: 'Salimata Kamate',
    description: 'Fatou',
    profession: 'актеры',
    enProfession: 'actor',
  },
  {
    id: 3084680,
    photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3084680.jpg',
    name: 'Абса Дьяту Тур',
    enName: 'Absa Diatou Toure',
    description: null,
    profession: 'актеры',
    enProfession: 'actor',
  },
]

const SLIDER_OPTIONS_MOVIE: SwiperProps = {
  slidesPerView: 3,
  spaceBetween: 20,
  initialSlide: 3,
  centeredSlides: false,
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

const filmFacts = [
  {
    value:
      'На создание картины режиссёрский дуэт вдохновила увиденная ими в 2004 году документальная лента, в которой рассказывалось о том, как молодой житель предместья был нанят присматривать за парализованным инвалидом <a href="/name/3152842/" class="all">Филиппом Поццо ди Борго</a>, который остался парализованным после несчастного случая 27 июля 1993 года.',
    type: 'FACT',
    spoiler: false,
  },
  {
    value:
      'Первоначальным выбором на роль <a href="/name/3152842/" class="all">Филиппа Поццо ди Борго</a> был <a href="/name/11670/" class="all">Даниель Отой</a>.',
    type: 'FACT',
    spoiler: false,
  },
  {
    value:
      'Несмотря на то, что ему пришлось играть совершенно обычного человека, <a href="/name/41644/" class="all">Омар Си</a> сбросил при подготовке к съёмкам почти пять килограммов веса. Актёр посчитал, что стандартный житель предместья с такой предысторией должен обладать более атлетическим телосложением.',
    type: 'FACT',
    spoiler: false,
  },
  {
    value:
      'Перед началом работы над проектом режиссёры <a href="/name/382906/" class="all">Оливье Накаш</a> и <a href="/name/426346/" class="all">Эрик Толедано</a> лично посетили живущего в Марокко <a href="/name/3152842/" class="all">Филиппа Поццо ди Борго</a>. Знакомство с ним и произнесенная им речь многократно увеличили их желание поставить фильм на основе его истории. Сам <a href="/name/3152842/" class="all">Филипп Поццо ди Борго</a> дал им огромное количество информации и советов практически по каждой сцене картины.',
    type: 'FACT',
    spoiler: false,
  },
  {
    value:
      'На том, чтобы в первую очередь сделать фильм комедией, а не драмой усиленно настаивал сам <a href="/name/3152842/" class="all">Филипп Поццо ди Борго</a>. Он не хотел, чтобы основанный на его жизни фильм стал историей сострадания и жалости.',
    type: 'FACT',
    spoiler: false,
  },
  {
    value:
      '<a href="/name/41644/" class="all">Омар Си</a> был приглашён сыграть в фильме ещё до того, как был написан сценарий.',
    type: 'FACT',
    spoiler: false,
  },
  {
    value:
      'Когда Дрисс и Филипп были в галерее, то у Дрисса провод от наушников сначала был с правой стороны, а в следующем кадре с левой.',
    type: 'BLOOPER',
    spoiler: true,
  },
  {
    value:
      'В сцене, когда главные герои находятся в картинной галерее, Филипп просит конфету. Дрис протягивает руку с зеленой конфетой, а в следующем кадре он кладет Филиппу в рот уже желтую.',
    type: 'BLOOPER',
    spoiler: true,
  },
]

const MoviePage = ({ className }: FilmPageProps) => {
  /*  const { movieId } = useParams()   const { data } = useGetFilmQuery(Number(movieId)) */
  const [, setActiveIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const renderItemsSimilarMovies = similarMovies.map((item) => (
    <SwiperSlide key={item.id} className={styles.sliderItem}>
      <img src={item.poster.url} alt={item.name} />
    </SwiperSlide>
  ))
  const renderItemsPersons = persons.map((item) => (
    <SwiperSlide key={item.id} className={styles.sliderItem}>
      <img src={item.photo} alt={item.name} />
    </SwiperSlide>
  ))
  const facts = showMore
    ? filmFacts.map((item) => (
        <li key={item.value} dangerouslySetInnerHTML={{ __html: item.value }} />
      ))
    : filmFacts
        .slice(0, 4)
        .map((item) => (
          <li
            key={item.value}
            dangerouslySetInnerHTML={{ __html: item.value }}
          />
        ))
  //TODO создать еще функцию для слайдера актеров
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }

  const classes = classNames(className, styles.root)
  return (
    <Content className={classes}>
      <Row gutter={29}>
        <Col xs={24} sm={24} md={10} lg={8} xl={8}>
          <img
            src="https://st.kp.yandex.net/images/film_big/535341.jpg"
            className={styles.image}
            alt=""
          />
        </Col>
        <Col xs={24} sm={24} md={14} lg={13} xl={13}>
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
      <Row>
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
      <Row>
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
  )
}

// eslint-disable-next-line import/no-default-export
export default MoviePage
