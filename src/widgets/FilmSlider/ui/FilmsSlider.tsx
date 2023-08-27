import { Skeleton } from 'antd'
import classNames from 'classnames'
import { useState } from 'react'

import { useGetFilmsForSlideQuery } from '@/entities/FilmsSlider'

import styles from './FilmSlider.module.scss'
import { FilmSlider } from './FilmSlider/FilmSlider'

export const FilmsSlider = () => {
  const { data, isSuccess, isLoading } = useGetFilmsForSlideQuery('')
  const [isLoadingLayout, setIsLoadingLayout] = useState(true)
  const classes = classNames({
    [styles.invisible]: isLoadingLayout,
    [styles.visible]: !isLoadingLayout,
  })

  const onLoadLayout = () => {
    setIsLoadingLayout(false)
  }

  return (
    <>
      {isLoading && (
        <Skeleton.Button active block style={{ height: '300px' }} />
      )}
      {isSuccess && (
        <FilmSlider
          className={classes}
          isLoadingLayout={isLoadingLayout}
          onLoadLayout={onLoadLayout}
          movies={data.docs}
        />
      )}
    </>
  )
}
