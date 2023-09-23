import { useParams } from 'react-router-dom'

const PersonPage = () => {
  const { personId } = useParams()
  return <>Person {personId}</>
}

// eslint-disable-next-line import/no-default-export
export default PersonPage
