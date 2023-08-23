import { WrapperComposer } from '@/WrapperComposer'

import { AntdWrapper } from './providers/AntdConfig'
import { ErrorBoundaryWrapper } from './providers/ErrorBoundary'
import { AppRouter, RouterWrapper } from './providers/RouterConfig'
import { StoreWrapper } from './providers/StoreConfig'

export const App = () => {
  return (
    <WrapperComposer
      wrappers={[
        RouterWrapper,
        AntdWrapper,
        StoreWrapper,
        ErrorBoundaryWrapper,
      ]}
      render={() => <AppRouter />}
    />
  )
}
