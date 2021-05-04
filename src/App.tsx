import { FC } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router } from 'react-router-dom'

import Routing from './Routing'

import GlobalStyle from 'styles/global'
import createQueryClient from 'api/createReactQueryClient'

const App: FC = () => {
  const queryClient = createQueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routing />
        </Router>

        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>

      <GlobalStyle />
    </>
  )
}

export default App
