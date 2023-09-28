import { useCallback, useEffect, useRef } from 'react'
import SwiperType from 'swiper'

export const useSwiperNavigation = () => {
  const prevBtnRef = useRef<HTMLButtonElement>(null)
  const nextBtnRef = useRef<HTMLButtonElement>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  const onSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper
  }, [])

  useEffect(() => {
    const swiper = swiperRef.current
    const prevBtn = prevBtnRef.current
    const nextBtn = nextBtnRef.current

    const slideNext = () => swiperRef.current?.slideNext()
    const slidePrev = () => swiperRef.current?.slidePrev()
    const onSlideChange = (swiper: SwiperType) => {
      const allowSlidePrev = !swiper.isBeginning
      const allowSlideNext = !swiper.isEnd

      if (prevBtnRef.current) {
        prevBtnRef.current.disabled = !allowSlidePrev
      }
      if (nextBtnRef.current) {
        nextBtnRef.current.disabled = !allowSlideNext
      }
    }

    prevBtn?.addEventListener('click', slidePrev)
    nextBtn?.addEventListener('click', slideNext)
    swiper?.on('transitionStart', onSlideChange)
    if (swiper) onSlideChange(swiper)

    return () => {
      prevBtn?.removeEventListener('click', slidePrev)
      nextBtn?.removeEventListener('click', slideNext)
      swiper?.off('slideChange', onSlideChange)
    }
  }, [])

  return { onSwiper, prevBtnRef, nextBtnRef }
}
