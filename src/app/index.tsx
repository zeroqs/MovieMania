import { AntdWrapper } from '@/app/providers/AntdConfig/ui/AntdWrapper'
import { WrapperComposer } from '@/WrapperComposer'

import { AppRouter, RouterWrapper } from './providers/RouterConfig'

export const App = () => {
  return (
    <WrapperComposer
      wrappers={[RouterWrapper, AntdWrapper]}
      render={() => <AppRouter />}
    />
  )
}
