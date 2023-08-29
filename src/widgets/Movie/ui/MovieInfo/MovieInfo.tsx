import { Col } from 'antd'
import classNames from 'classnames'
import { ReactNode } from 'react'

import { Genre } from '@/entities/Film'
import { budgetParse } from '@/shared/lib'
import { Genres, Typography } from '@/shared/ui'

import styles from './MovieInfo.module.scss'

interface MovieInfoProps {
  className?: string
  name: string
  rating: number
  budget: { value: number; currency: string }
  year: string
  description: string
  genres: Genre[]
  personsDesktop: ReactNode
}

export const MovieInfo = ({
  className,
  name,
  rating,
  budget,
  year,
  description,
  genres,
  personsDesktop,
}: MovieInfoProps) => {
  const classes = classNames(className, styles.root)

  return (
    <Col className={classes} xs={24} sm={24} md={14} lg={13} xl={13}>
      <Typography className={styles.title} type="title">
        Название: <span className={styles.filmInfo}>{name}</span>
      </Typography>
      <Typography className={styles.title} type="title">
        Рейтинг: <span className={styles.filmInfo}>{rating}</span>
      </Typography>
      {budget.value && (
        <Typography className={styles.title} type="title">
          Бюджет:{' '}
          <span className={styles.filmInfo}>
            {budget.currency}
            {budgetParse(budget.value)}
          </span>
        </Typography>
      )}
      <Typography className={styles.title} type="title">
        Год выхода: <span className={styles.filmInfo}>{year}</span>
      </Typography>
      <Typography className={styles.title} type="title">
        Описание: <span className={styles.filmDescription}>{description}</span>
      </Typography>
      <Typography className={styles.title} type="title">
        Жанры:{' '}
        <Genres className={styles.genres} showCount={3} genres={genres} />
      </Typography>
      <div className={styles.persons}>{personsDesktop}</div>
    </Col>
  )
}
