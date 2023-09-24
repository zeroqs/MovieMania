import { useParams } from 'react-router-dom'

import { useGetPersonQuery } from '@/entities/Person'

const PersonPage = () => {
  const { personId } = useParams()
  const { data } = useGetPersonQuery(String(personId))
  console.log(data)
  return <>Person {personId}</>
}

// eslint-disable-next-line import/no-default-export
export default PersonPage
