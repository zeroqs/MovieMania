import { WrapperComposer } from '@/WrapperComposer'

import { AntdWrapper } from './providers/AntdConfig'
import { AppRouter, RouterWrapper } from './providers/RouterConfig'
import { StoreWrapper } from './providers/StoreConfig'

export const App = () => {
  return (
    <WrapperComposer
      wrappers={[RouterWrapper, AntdWrapper, StoreWrapper]}
      render={() => <AppRouter />}
    />
  )
}
