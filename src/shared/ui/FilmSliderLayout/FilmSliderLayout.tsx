import classNames from 'classnames'
import { ReactNode } from 'react'

import styles from './FilmSliderLayout.module.scss'

interface FilmSliderLayoutProps {
  className?: string
  children?: ReactNode
  bgImage: string
}

export const FilmSliderLayout = ({
  className,
  children,
  bgImage,
}: FilmSliderLayoutProps) => {
  const classes = classNames(className, styles.root)

  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage}) `,
      }}
      className={classes}
    >
      {children}
    </div>
  )
}
