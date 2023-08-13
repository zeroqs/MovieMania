import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd'
import classNames from 'classnames'

import styles from './Avatar.module.scss'

interface AvatarProps extends AntAvatarProps {
  className?: string
}

export const Avatar = ({ className, ...otherProps }: AvatarProps) => {
  const classes = classNames(className, styles.root)

  return <AntAvatar className={classes} {...otherProps} />
}
