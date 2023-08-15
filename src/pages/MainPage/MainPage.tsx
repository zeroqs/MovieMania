import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Content } from '@/shared/ui'

import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <>
      <Content className={styles.root}>
        <div className={styles.filmPreview}>
          <header className={styles.title}>
            <h1>Джентльмены</h1>
            <div className={styles.filmDetails}>
              <span>7.8</span>
              <span>Жанры</span>
              <span>2023</span>
            </div>
          </header>
          <main className={styles.main}>
            <span>
              Наркобарон хочет уйти на покой, но криминальный мир не отпускает.
              Успешное возвращение Гая Ричи к корням
            </span>
          </main>
          <footer className={styles.footer}>
            <div className={styles.leftSide}>left</div>
            <div className={styles.rightSide}>
              <Swiper
                initialSlide={1}
                centeredSlides
                navigation={true}
                slidesPerView={3}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </footer>
        </div>
      </Content>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default MainPage
