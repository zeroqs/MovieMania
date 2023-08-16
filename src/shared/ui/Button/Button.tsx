import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'
import classNames from 'classnames'
import { ReactNode, Ref } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends AntButtonProps {
  rightItem?: ReactNode
  leftItem?: ReactNode
  buttonRef?: Ref<HTMLElement>
}

export const Button = ({
  className,
  leftItem,
  rightItem,
  children,
  buttonRef,
  type = 'primary',
  ...otherProps
}: ButtonProps) => {
  const classes = classNames(className, styles.root, {
    [styles.leftItem]: leftItem,
    [styles.default]: type === 'default',
  })
  return (
    <AntButton ref={buttonRef} className={classes} type={type} {...otherProps}>
      {leftItem}
      {children}
      {rightItem}
    </AntButton>
  )
}
