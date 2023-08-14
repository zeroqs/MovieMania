import {
  ControlOutlined,
  LeftOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, LayoutProps } from 'antd'
import classNames from 'classnames'

import { Avatar, Button, Input } from '@/shared/ui'

import styles from './Header.module.scss'

interface HeaderProps extends LayoutProps {
  className?: string
}

const suffix = (
  <ControlOutlined
    style={{
      fontSize: 24,
      color: '#b6b5b5',
    }}
  />
)

const prefix = (
  <SearchOutlined
    style={{
      fontSize: 24,
      color: '#b6b5b5',
    }}
  />
)
export const Header = ({ className, ...otherProps }: HeaderProps) => {
  const classes = classNames(className, styles.root)

  return (
    <Layout.Header className={classes} {...otherProps}>
      <div className={styles.leftSide}>
        <Button type="default" leftItem={<LeftOutlined />} />
        <Input
          className={styles.rightSide__input}
          prefix={prefix}
          suffix={suffix}
          placeholder="Search everything"
        />
      </div>
      <div className={styles.rightSide}>
        <Avatar size={54} icon={<UserOutlined />} />
      </div>
    </Layout.Header>
  )
}
