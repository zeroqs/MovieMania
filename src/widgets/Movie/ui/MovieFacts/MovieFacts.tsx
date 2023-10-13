import classNames from 'classnames'

import { Fact } from '@/entities/Film'
import { usePagination } from '@/shared/hooks/usePagination'
import { Button, Typography } from '@/shared/ui'

import styles from './MovieFacts.module.scss'

interface MovieFactsProps {
  className?: string
  facts: Fact[]
}

export const MovieFacts = ({ className, facts }: MovieFactsProps) => {
  const classes = classNames(className, styles.root)
  const { sortedArray, pagination, changePaginationValue } = usePagination(
    facts,
    5,
  )

  const factItems = sortedArray.map((item) => (
    <li key={item.value} dangerouslySetInnerHTML={{ __html: item.value }} />
  ))

  return (
    <div className={classes}>
      <Typography className={styles.similarMoviesTitle} type="title">
        Факты о фильме ({facts.length}):
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
