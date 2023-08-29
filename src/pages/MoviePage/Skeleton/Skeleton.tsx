import { Col, Row, Skeleton } from 'antd'

import { Content } from '@/shared/ui'

import styles from '../FilmPage.module.scss'

export const MovieSkeleton = () => {
  return (
    <Content>
      <Row gutter={29}>
        <Col xs={24} sm={24} md={10} lg={8} xl={8}>
          <Skeleton.Button
            active
            block
            style={{ height: '500px', width: '400px' }}
          />
        </Col>
        <Col xs={24} sm={24} md={14} lg={13} xl={13}>
          <Skeleton.Button active block style={{ height: '400px' }} />
        </Col>
      </Row>
      <Row className={styles.similarMoviesRow}>
        <Skeleton.Button
          active
          block
          style={{ height: '200px', width: '100%' }}
        />
      </Row>
      <Row className={styles.filmFactsRow}>
        <Skeleton.Button active block style={{ height: '300px' }} />
      </Row>
    </Content>
  )
}
