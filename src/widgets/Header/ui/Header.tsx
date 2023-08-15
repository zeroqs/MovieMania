import { LeftOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, LayoutProps } from 'antd'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

import { Avatar, Button, Input } from '@/shared/ui'

import styles from './Header.module.scss'

interface HeaderProps extends LayoutProps {
  className?: string
}

const prefix = (
  <SearchOutlined
    style={{
      fontSize: 24,
      color: '#b6b5b5',
    }}
  />
)
export const Header = ({ className, ...otherProps }: HeaderProps) => {
  const navigate = useNavigate()
  const classes = classNames(className, styles.root)

  const navigateBack = () => {
    navigate(-1)
  }

  return (
    <Layout.Header className={classes} {...otherProps}>
      <div className={styles.leftSide}>
        <Button
          onClick={navigateBack}
          type="default"
          leftItem={<LeftOutlined />}
        />
        <Input
          className={styles.rightSide__input}
          prefix={prefix}
          placeholder="Search everything"
        />
      </div>
      <div className={styles.rightSide}>
        <Avatar size={54} icon={<UserOutlined />} />
      </div>
    </Layout.Header>
  )
}
