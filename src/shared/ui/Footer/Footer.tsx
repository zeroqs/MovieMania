import { Layout, LayoutProps } from 'antd'
import classNames from 'classnames'

import styles from './Footer.module.scss'

interface FooterProps extends LayoutProps {
  className?: string
}

export const Footer = ({ className, children }: FooterProps) => {
  const classes = classNames(className, styles.root)

  return <Layout.Footer className={classes}>{children}</Layout.Footer>
}
