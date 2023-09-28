import classNames from 'classnames'

import { Fact } from '@/entities/Person'
import { usePagination } from '@/shared/hooks/usePagination.ts'
import { Button, Typography } from '@/shared/ui'

import styles from './Facts.module.scss'

interface FactsProps {
  className?: string
  facts: Fact[]
}

export const Facts = ({ className, facts }: FactsProps) => {
  const classes = classNames(className, styles.root)
  const { sortedArray, pagination, changePaginationValue } = usePagination(
    facts,
    5,
  )

  const factItems = sortedArray.map((fact) => (
    <li key={fact.value} dangerouslySetInnerHTML={{ __html: fact.value }} />
  ))

  return (
    <div className={classes}>
      <Typography className={styles.similarMoviesTitle} type="title">
        Факты ({facts.length}) :
      </Typography>
      <div className={styles.filmFacts}>
        <ul>{factItems}</ul>
      </div>
      {facts.length > pagination && (
        <Button
          className={styles.showMoreButton}
          type="link"
          onClick={changePaginationValue}
        >
          Показать больше
        </Button>
      )}
    </div>
  )
}
