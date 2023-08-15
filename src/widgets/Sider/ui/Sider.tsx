import {
  CalendarOutlined,
  CompassOutlined,
  HeartOutlined,
} from '@ant-design/icons'
import { Layout, Menu, MenuProps, SiderProps as AntSiderProps } from 'antd'
import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Sider.module.scss'

interface SiderProps extends AntSiderProps {
  className?: string
}

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

export const Sider = ({ className }: SiderProps) => {
  const classes = classNames(className, styles.root)

  return (
    <Layout.Sider breakpoint="lg" collapsedWidth="0" className={classes}>
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
    </Layout.Sider>
  )
}
