import { Action } from './Action/Action.tsx'
import { Comedy } from './Comedy/Comedy'
import { Family } from './Family/Family.tsx'
import { Fantastic } from './Fantastic/Fantastic.tsx'
import { GenresSlider } from './GenresSlider/GenresSlider'
import styles from './Movies.module.scss'

export const Movies = () => {
  return (
    <>
      <GenresSlider />
      <div className={styles.movieList}>
        <Comedy />
        <Action />
        <Fantastic />
        <Family />
      </div>
    </>
  )
}
