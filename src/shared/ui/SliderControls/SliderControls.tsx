import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { ReactNode } from 'react'
import SwiperType from 'swiper'
import { Swiper, SwiperProps } from 'swiper/react'

import { useSwiperNavigation } from '../../hooks/useSwiperNavigation.ts'
import { Button } from '../Button/Button'
import styles from './SliderControls.module.scss'

interface SliderControlsProps {
  className?: string
  handleSlideChange: (swiper: SwiperType) => void
  renderItems: ReactNode
  sliderOptions: SwiperProps
}

export const SliderControls = ({
  className,
  handleSlideChange,
  sliderOptions,
  renderItems,
}: SliderControlsProps) => {
  const { onSwiper, nextBtnRef, prevBtnRef } = useSwiperNavigation()
  const classes = classNames(className, styles.root)

  return (
    <div className={classes}>
      <Swiper
        onSwiper={onSwiper}
        onSlideChange={handleSlideChange}
        {...sliderOptions}
      >
        {renderItems}
      </Swiper>
      <Button className={styles.prev} buttonRef={prevBtnRef}>
        <LeftOutlined style={{ fontSize: 11 }} />
      </Button>
      <Button className={styles.next} buttonRef={nextBtnRef}>
        <RightOutlined style={{ fontSize: 11 }} />
      </Button>
    </div>
  )
}
