import { Layout, LayoutProps } from 'antd'
import classNames from 'classnames'

import styles from './Content.module.scss'

interface ContentProps extends LayoutProps {
  className?: string
  dataId?: string
}

export const Content = ({
  className,
  children,
  dataId,
  ...otherProps
}: ContentProps) => {
  const classes = classNames(className, styles.root)

  return (
    <Layout.Content data-testid={dataId} className={classes} {...otherProps}>
      {children}
    </Layout.Content>
  )
}
