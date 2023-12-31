import classNames from 'classnames'
import { ReactNode, useEffect } from 'react'

import styles from './FilmSliderLayout.module.scss'

interface FilmSliderLayoutProps {
  className?: string
  children?: ReactNode
  bgImage: string
  onLoadLayout: () => void
  dataId?: string
}

export const FilmSliderLayout = ({
  className,
  children,
  bgImage,
  onLoadLayout,
  dataId,
}: FilmSliderLayoutProps) => {
  const classes = classNames(className, styles.root)

  useEffect(() => {
    const img = new Image()
    img.src = bgImage
    img.addEventListener('load', onLoadLayout)
  }, [bgImage, onLoadLayout])

  return (
    <>
      <div
        data-testid={dataId}
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage}) `,
        }}
        className={classes}
      >
        {children}
      </div>
    </>
  )
}
