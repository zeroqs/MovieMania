import classNames from 'classnames'
import { useState } from 'react'

import { Fact } from '@/entities/Person'
import { Button, Typography } from '@/shared/ui'

import styles from './Facts.module.scss'

interface FactsProps {
  className?: string
  facts: Fact[]
}

export const Facts = ({ className, facts }: FactsProps) => {
  const classes = classNames(className, styles.root)
  const [pagination, setPagination] = useState(5)

  const factItems = facts
    .slice(0, pagination)
    .map((fact) => (
      <li key={fact.value} dangerouslySetInnerHTML={{ __html: fact.value }} />
    ))
  console.log(facts.length)
  const showMore = () => {
    setPagination((prevState) => prevState + 5)
  }

  return (
    <div className={classes}>
      <Typography className={styles.similarMoviesTitle} type="title">
        Факты :
      </Typography>
      <div className={styles.filmFacts}>
        <ul>{factItems}</ul>
      </div>
      {facts.length > pagination && (
        <Button
          className={styles.showMoreButton}
          type="link"
          onClick={showMore}
        >
          Показать больше
        </Button>
      )}
    </div>
  )
}
