import { SwiperProps } from 'swiper/react'

export const SLIDER_OPTIONS_PERSONS: SwiperProps = {
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
    1430: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 5,
    },
  },
}
