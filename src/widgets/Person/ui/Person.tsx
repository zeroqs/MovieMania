import { Row } from 'antd'
import { useParams } from 'react-router-dom'

import { useGetPersonQuery } from '@/entities/Person'
import { Content } from '@/shared/ui'

import { Facts } from './Facts/Facts'
import { Movies } from './Movies/Movies'
import styles from './Person.module.scss'
import { PersonInfo } from './PersonInfo/PersonInfo'
import { Poster } from './Poster/Poster'

export const Person = () => {
  const { personId } = useParams()
  const { data, isLoading, isError, isSuccess } = useGetPersonQuery(
    String(personId),
  )

  if (isLoading) return <h1>loading</h1>
  if (isError) return <h1>Error fetch</h1>

  return (
    <>
      {isSuccess && (
        <Content className={styles.content}>
          <Row justify="center">
            <div className={styles.personHeader}>
              <Poster
                className={styles.poster}
                alt={data.name}
                src={data.photo}
              />
              <PersonInfo {...data} />
            </div>
          </Row>
          <Movies movies={data.movies} />
          <Facts facts={data.facts} />
        </Content>
      )}
    </>
  )
}
