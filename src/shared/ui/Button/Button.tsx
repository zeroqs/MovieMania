import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'
import { ReactNode } from 'react'

interface ButtonProps extends AntButtonProps {
  rightItem?: ReactNode
  leftItem?: ReactNode
}

export const Button = ({
  leftItem,
  rightItem,
  children,
  type = 'primary',
  ...otherProps
}: ButtonProps) => {
  return (
    <AntButton type={type} {...otherProps}>
      {children}
    </AntButton>
  )
}
