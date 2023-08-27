import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'
import classNames from 'classnames'
import { ReactNode, Ref } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends AntButtonProps {
  rightItem?: ReactNode
  leftItem?: ReactNode
  buttonRef?: Ref<HTMLElement>
  dataId?: string
}

export const Button = ({
  className,
  leftItem,
  rightItem,
  children,
  buttonRef,
  type = 'primary',
  dataId,
  ...otherProps
}: ButtonProps) => {
  const classes = classNames(className, styles.root, {
    [styles.leftItem]: leftItem,
    [styles.default]: type === 'default',
  })
  return (
    <AntButton
      data-testid={dataId}
      role="button"
      ref={buttonRef}
      className={classes}
      type={type}
      {...otherProps}
    >
      {leftItem}
      {children}
      {rightItem}
    </AntButton>
  )
}
