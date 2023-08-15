import { Layout, LayoutProps } from 'antd'
import classNames from 'classnames'

import styles from './Content.module.scss'

interface ContentProps extends LayoutProps {
  className?: string
}

export const Content = ({
  className,
  children,
  ...otherProps
}: ContentProps) => {
  const classes = classNames(className, styles.root)

  return (
    <Layout.Content className={classes} {...otherProps}>
      {children}
    </Layout.Content>
  )
}
