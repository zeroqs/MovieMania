import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { useState } from 'react'
import { AiOutlineFire } from 'react-icons/ai'
import { FiMap } from 'react-icons/fi'
import { GiMachineGunMagazine } from 'react-icons/gi'
import { GoTrophy } from 'react-icons/go'
import { MdFamilyRestroom, MdOutlineTheaterComedy } from 'react-icons/md'
import { PiKnifeDuotone } from 'react-icons/pi'
import { RxRocket } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import SwiperType from 'swiper'
import { SwiperProps, SwiperSlide } from 'swiper/react'

import { Genres as IGenres } from '@/entities/FilmsSlider'
import { Content, SliderControls, Typography } from '@/shared/ui'
import { FilmsSlider } from '@/widgets'

import styles from './MainPage.module.scss'

const genres: IGenres[] = [
  { name: 'Лучшие', icon: <GoTrophy style={{ fontSize: '20px' }} /> },
  { name: 'Новые', icon: <AiOutlineFire style={{ fontSize: '20px' }} /> },
  { name: 'Ужасы', icon: <PiKnifeDuotone style={{ fontSize: '20px' }} /> },
  {
    name: 'Приключения',
    icon: <FiMap style={{ fontSize: '20px' }} />,
  },
  { name: 'Фантастика', icon: <RxRocket style={{ fontSize: '20px' }} /> },
  { name: 'Семейные', icon: <MdFamilyRestroom style={{ fontSize: '20px' }} /> },
  {
    name: 'Комедии',
    icon: <MdOutlineTheaterComedy style={{ fontSize: '20px' }} />,
  },
  {
    name: 'Военные',
    icon: <GiMachineGunMagazine style={{ fontSize: '20px' }} />,
  },
]

const SLIDER_OPTIONS: SwiperProps = {
  slidesPerView: 8,
  spaceBetween: 20,
  initialSlide: 0,
  centeredSlides: false,
}

const MainPage = () => {
  const [, setActiveIndex] = useState(0)

  const renderItems = genres.map((item) => (
    <SwiperSlide key={item.name}>
      <Link to={`/about?genre=${item.name.toLowerCase()}`}>
        <Typography key={item.name} className={styles.default}>
          {item.name}
          {item.icon}
        </Typography>
      </Link>
    </SwiperSlide>
  ))

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }
  return (
    <>
      <Content className={styles.root}>
        <FilmsSlider />
        <div className={styles.container}>
          <SliderControls
            controls={false}
            handleSlideChange={handleSlideChange}
            renderItems={renderItems}
            sliderOptions={SLIDER_OPTIONS}
          />
        </div>
      </Content>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default MainPage
