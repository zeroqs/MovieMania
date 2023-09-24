import { Typography as antTypography } from 'antd'
import classNames from 'classnames'
import { ReactNode } from 'react'

import styles from './Typography.module.scss'

interface TypographyProps {
  className?: string
  children?: ReactNode
  type?: 'text' | 'title'
  titleLevel?: 1 | 2 | 5 | 3 | 4
}

export const Typography = ({
  className,
  children,
  type = 'text',
  titleLevel = 1,
}: TypographyProps) => {
  const classes = classNames(className, styles.root)

  if (type === 'text')
    return (
      <antTypography.Text role="text" className={classes}>
        {children}
      </antTypography.Text>
    )

  return (
    <antTypography.Title role="title" level={titleLevel} className={classes}>
      {children}
    </antTypography.Title>
  )
}
