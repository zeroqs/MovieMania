import { Skeleton } from 'antd'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

import styles from './Image.module.scss'

interface ImageProps {
  className?: string
  src: string
  alt: string
  skeletonHeight?: number
  skeletonWidth?: number
  dataId?: string
}

export const Image = ({
  className,
  src,
  alt,
  skeletonHeight,
  skeletonWidth,
  dataId,
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const classes = classNames(className, styles.root, {
    [styles.isLoading]: !isLoaded,
    [styles.isLoaded]: isLoaded,
  })
  const handlerIsLoaded = () => {
    setIsLoaded(true)
  }

  useEffect(() => {
    setIsLoaded(false)
  }, [src])
  // TODO сделать пропс для скелетона
  return (
    <>
      <img
        data-testid={dataId}
        className={classes}
        src={src}
        alt={alt}
        onLoad={handlerIsLoaded}
      />
      {!isLoaded && (
        <div data-testid="img-loading">
          <Skeleton.Image
            style={{
              height: `${skeletonHeight}px`,
              width: `${skeletonWidth}px`,
            }}
            active={!isLoaded}
          />
        </div>
      )}
    </>
  )
}
