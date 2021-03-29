import React from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { Provider } from 'react-redux'
import { ModalProvider } from 'uikit'
import { SwapRouters, SwapNames } from 'chainconts'
import { NetworkContextName } from './constants'
import store from './state'
import getLibrary from './utils/getLibrary'
import { ThemeContextProvider } from './ThemeContext'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

export const SwapRouterContext = React.createContext({ swapRouter: SwapNames.SLIME, toggleSwap: () => null })
const CACHE_KEY = 'SWAPROUTEROPT'

const SwapRouterProvider: React.FC = ({ children }) => {
  const [swapRouter, setSwapRouter] = React.useState(() => {
    return SwapRouters[localStorage.getItem(CACHE_KEY) ?? SwapNames.SLIME] ?? SwapRouters[SwapNames.SLIME]
  })

  const toggleSwap = (): any => {
    setSwapRouter((prevState: any) => {
      const newValue = prevState === SwapRouters[SwapNames.SLIME] ? SwapNames.PCS : SwapNames.SLIME
      localStorage.setItem(CACHE_KEY, JSON.stringify(newValue))
      return SwapRouters[newValue]
    })
  }

  return <SwapRouterContext.Provider value={{ swapRouter, toggleSwap }}>{children}</SwapRouterContext.Provider>
}

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <ThemeContextProvider>
            <ModalProvider>
              <SwapRouterProvider>{children}</SwapRouterProvider>
            </ModalProvider>
          </ThemeContextProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

export default Providers
