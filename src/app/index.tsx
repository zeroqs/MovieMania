import { WrapperComposer } from '@/WrapperComposer'

import { AntdWrapper } from './providers/AntdConfig/ui/AntdWrapper'
import { AppRouter, RouterWrapper } from './providers/RouterConfig'

export const App = () => {
  return (
    <WrapperComposer
      wrappers={[RouterWrapper, AntdWrapper]}
      render={() => <AppRouter />}
    />
  )
}
