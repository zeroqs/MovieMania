import classNames from 'classnames'
import { useState } from 'react'

import { Fact } from '@/entities/Film'
import { Button, Typography } from '@/shared/ui'

import styles from './MovieFacts.module.scss'

interface MovieFactsProps {
  className?: string
  facts: Fact[]
}

export const MovieFacts = ({ className, facts }: MovieFactsProps) => {
  const classes = classNames(className, styles.root)
  const [showMore, setShowMore] = useState(false)

  const factItems = showMore
    ? facts.map((item) => (
        <li key={item.value} dangerouslySetInnerHTML={{ __html: item.value }} />
      ))
    : facts
        .slice(0, 4)
        .map((item) => (
          <li
            key={item.value}
            dangerouslySetInnerHTML={{ __html: item.value }}
          />
        ))
  return (
    <div className={classes}>
      <Typography className={styles.similarMoviesTitle} type="title">
        Факты о фильме:
      </Typography>
      <div className={styles.filmFacts}>
        <ul>{factItems}</ul>
      </div>
      <Button
        className={styles.showMoreButton}
        type="link"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Скрыть' : 'Показать больше'}
      </Button>
    </div>
  )
}
