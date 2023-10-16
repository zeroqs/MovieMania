import { Input as AntInput, InputProps as AntInputProps } from 'antd'
import classNames from 'classnames'
import { forwardRef } from 'react'

import styles from './Input.module.scss'

interface InputProps extends AntInputProps {
  className?: string
}

export const Input = forwardRef(
  ({ className, ...otherProps }: InputProps, ref) => {
    const classes = classNames(className, styles.root)

    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <AntInput role="input" className={classes} {...otherProps} ref={ref} />
    )
  },
)
