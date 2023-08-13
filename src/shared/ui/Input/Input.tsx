import { Input as AntInput, InputProps as AntInputProps } from 'antd'
import classNames from 'classnames'

import styles from './Input.module.scss'

interface InputProps extends AntInputProps {
  className?: string
}

export const Input = ({ className, children, ...otherProps }: InputProps) => {
  const classes = classNames(className, styles.root)

  return <AntInput className={classes} {...otherProps} />
}
