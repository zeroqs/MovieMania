import { Layout, LayoutProps } from 'antd'
import classNames from 'classnames'

import styles from './Footer.module.scss'

interface FooterProps extends LayoutProps {
  className?: string
  dataId?: string
}

export const Footer = ({ className, children, dataId }: FooterProps) => {
  const classes = classNames(className, styles.root)

  return (
    <Layout.Footer data-testid={dataId} className={classes}>
      {children}
    </Layout.Footer>
  )
}
