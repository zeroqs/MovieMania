import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { useGetFilmsForSlideQuery } from '@/entities/movie'
import { Content } from '@/shared/ui'
import { FilmSlider } from '@/widgets'

import styles from './MainPage.module.scss'

const MainPage = () => {
  const { data, isSuccess, isLoading } = useGetFilmsForSlideQuery('')

  return (
    <>
      <Content className={styles.root}>
        {isLoading && <h1>Loading</h1>}
        {isSuccess && <FilmSlider movies={data.docs} />}
      </Content>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default MainPage
