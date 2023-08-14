import {
  CalendarOutlined,
  CompassOutlined,
  HeartOutlined,
} from '@ant-design/icons'
import { Layout, Menu, MenuProps, theme } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import { Header } from '@/widgets'

import styles from './MainPage.module.scss'

const { Content, Footer, Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Browse', '1', <CompassOutlined />),
  getItem('Watch list', '2', <HeartOutlined />),
  getItem('Coming soon', '3', <CalendarOutlined />),
]

const MainPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ borderRight: '1px solid #161616' }}
      >
        <div className={styles.logo}>
          <Link to="/">
            <h1>Movie</h1>
            <h1 className={styles.lastWorld}>Mania</h1>
          </Link>
        </div>
        <Menu
          className={styles.menu}
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default MainPage
