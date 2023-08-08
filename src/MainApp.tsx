import { AntdConfigWrapper } from './AntdConfigWrapper'
import { App } from './App'
import { WrapperComposer } from './WrapperComposer'

export const MainApp = () => {
  return (
    <WrapperComposer
      wrappers={[
        AntdConfigWrapper,
        // Добавьте здесь другие обертки по мере необходимости
      ]}
      render={() => <App />}
    />
  )
}
