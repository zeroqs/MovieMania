import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Content } from '@/shared/ui'
import { FilmSlider } from '@/widgets'

import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <>
      <Content className={styles.root}>
        <FilmSlider />
      </Content>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default MainPage
