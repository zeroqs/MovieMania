import { AiOutlineFire } from 'react-icons/ai'
import { FiMap } from 'react-icons/fi'
import { GiMachineGunMagazine } from 'react-icons/gi'
import { GoTrophy } from 'react-icons/go'
import { MdFamilyRestroom, MdOutlineTheaterComedy } from 'react-icons/md'
import { PiKnifeDuotone } from 'react-icons/pi'
import { RxRocket } from 'react-icons/rx'
import { SwiperProps } from 'swiper/react'

import { Genres as IGenres } from '@/entities/FilmsSlider'

export const genres: IGenres[] = [
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

export const SLIDER_OPTIONS: SwiperProps = {
  slidesPerView: 8,
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
    1230: {
      slidesPerView: 4,
    },
    1430: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 6,
    },
    1900: {
      slidesPerView: 8,
    },
  },
}
