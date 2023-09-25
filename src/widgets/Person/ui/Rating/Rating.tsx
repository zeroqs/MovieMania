import classNames from 'classnames'

import styles from './Rating.module.scss'

interface RatingProps {
  className?: string
  rating: number | null
}

export const Rating = ({ className, rating }: RatingProps) => {
  const ratingFormatted =
    Math.floor(Number.parseFloat(String(rating ?? 0)) * 10) / 10

  const classes = classNames(className, styles.root, {
    [styles.goodRating]: ratingFormatted >= 7,
    [styles.badRating]: ratingFormatted < 7,
  })

  return <span className={classes}>{ratingFormatted}</span>
}
