import { Result } from 'antd'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/ui'

import styles from './NotFound.module.scss'

const NotFound = () => {
  const classes = classNames(styles.root)
  const navigate = useNavigate()

  const navigateToMain = () => {
    navigate('/')
  }

  return (
    <main className={classes}>
      <Result
        className={styles.error}
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button onClick={navigateToMain} type="primary">
            Back Home
          </Button>
        }
      />
    </main>
  )
}

// eslint-disable-next-line import/no-default-export
export default NotFound
