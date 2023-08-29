import { Col } from 'antd'
import classNames from 'classnames'

import { Image } from '@/shared/ui'

import styles from './Poster.module.scss'

interface PosterProps {
  className?: string
  alt: string
  src: string
}

export const Poster = ({ className, src, alt }: PosterProps) => {
  const classes = classNames(className, styles.root)

  return (
    <Col className={classes} xs={24} sm={24} md={10} lg={8} xl={8}>
      <Image
        skeletonWidth={500}
        skeletonHeight={600}
        className={styles.image}
        alt={alt}
        src={src}
      />
    </Col>
  )
}
