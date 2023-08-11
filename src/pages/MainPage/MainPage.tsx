import { FaRegCompass } from 'react-icons/fa'

import { Button } from '@/shared/ui'

const MainPage = () => {
  return (
    <>
      Main Page
      <Button leftItem={<FaRegCompass size="24px" />}>Button</Button>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default MainPage
