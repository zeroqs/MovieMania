import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'
import classNames from 'classnames'
import { ReactNode } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends AntButtonProps {
  rightItem?: ReactNode
  leftItem?: ReactNode
}

export const Button = ({
  className,
  leftItem,
  rightItem,
  children,
  type = 'primary',
  ...otherProps
}: ButtonProps) => {
  const classes = classNames(className, styles.root, {
    [styles.leftItem]: leftItem,
  })

  return (
    <AntButton className={classes} type={type} {...otherProps}>
      {leftItem}
      {children}
      {rightItem}
    </AntButton>
  )
}
