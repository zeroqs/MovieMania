import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Content } from '@/shared/ui'
import { FilmsSlider } from '@/widgets'
import { Movies } from '@/widgets/Landing'

import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <>
      <Content className={styles.root}>
        <FilmsSlider />
        <div className={styles.container}>
          <Movies />
        </div>
      </Content>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default MainPage
