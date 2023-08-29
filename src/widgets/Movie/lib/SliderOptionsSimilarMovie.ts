import { SwiperProps } from 'swiper/react'

export const SLIDER_OPTIONS_MOVIE: SwiperProps = {
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
