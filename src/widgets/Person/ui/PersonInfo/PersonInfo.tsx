import { Person } from '@/entities/Person'
import { formatDate } from '@/shared/lib/dayParse'
import { Typography } from '@/shared/ui'

import styles from './PersonInfo.module.scss'

export const PersonInfo = ({
  death,
  profession,
  birthPlace,
  name,
  enName,
  // movies,
  age,
  birthday,
}: Person) => {
  const career = profession.map((item) => item.value).join(', ')
  const placeBirth = birthPlace.map((item) => item.value).join(', ')
  const dayDie = death && (
    <div className={styles.row}>
      <span className={styles.valueTitle}>Дата смерти:</span>
      <span>
        {formatDate(death)} <span className={styles.valueTitle}>{'• '}</span>
        <span className={styles.valueTitle}>{age} Лет</span>
      </span>
    </div>
  )
  // const movie = movies.filter((item) => item.name)

  return (
    <>
      <div className={styles.headerTitle}>
        <Typography className={styles.name} type="title" titleLevel={3}>
          {name}
        </Typography>
        <Typography className={styles.enName} type="title" titleLevel={5}>
          {enName}
        </Typography>
      </div>
      <div className={styles.headerInfo}>
        <div className={styles.row}>
          <span className={styles.valueTitle}>Карьера:</span>
          <span>{career}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.valueTitle}>День рождения:</span>
          <span>
            {formatDate(birthday)}{' '}
            {!death && (
              <>
                <span className={styles.valueTitle}>{'• '}</span>
                <span className={styles.valueTitle}>{age} Лет</span>
              </>
            )}
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.valueTitle}>Место рождения:</span>
          <span>{placeBirth}</span>
        </div>
        {dayDie}
      </div>
    </>
  )
}
