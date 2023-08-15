import { Layout } from 'antd'

import { Content, Footer } from '@/shared/ui'
import { Header, Sider } from '@/widgets'

import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <Layout className={styles.layout}>
      <Sider />
      <Layout>
        <Header />
        <Content>content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default MainPage
