import { LeftOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, LayoutProps } from 'antd'
import classNames from 'classnames'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDebounce } from 'use-debounce'

import { useSearchByQuery } from '@/entities/Search'
import { AutoComplete, Avatar, Button } from '@/shared/ui'
// eslint-disable-next-line conarti-fsd/layers-slices
import { Rating } from '@/widgets/Person/ui/Rating/Rating'

import styles from './Header.module.scss'

interface HeaderProps extends LayoutProps {
  className?: string
}

export const Header = ({ className, ...otherProps }: HeaderProps) => {
  const navigate = useNavigate()
  const classes = classNames(className, styles.root)
  const [searchValue, setSearchValue] = useState('')
  const [debouncedValue] = useDebounce(searchValue, 500)

  const { data } = useSearchByQuery(debouncedValue)
  const onChange = (value: string) => {
    setSearchValue(value)
  }

  const onSelect = () => {
    setSearchValue('')
  }

  const navigateBack = () => {
    navigate(-1)
  }

  const options =
    data?.map((item) => {
      return {
        label: (
          <Link to={`movie/${item.id}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img style={{ width: '40px' }} src={item.poster} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '18px' }}>{item.name}</h1>
                <div style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                  <Rating rating={item.rating} />
                  {item.year}
                </div>
              </div>
            </div>
          </Link>
        ),
        value: item.id,
      }
    }) || []

  return (
    <Layout.Header className={classes} {...otherProps}>
      <div className={styles.leftSide}>
        <Button
          onClick={navigateBack}
          type="default"
          leftItem={<LeftOutlined />}
        />
        <AutoComplete
          onSelect={onSelect}
          value={searchValue}
          onChange={onChange}
          className={styles.rightSide__input}
          placeholder="Найти"
          options={options}
        />
      </div>
      <div className={styles.rightSide}>
        <Avatar size={54} icon={<UserOutlined />} />
      </div>
    </Layout.Header>
  )
}
