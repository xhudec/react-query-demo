import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routing from './Routing'
import GlobalStyle from 'styles/global'

const App: FC = () => {
  return (
    <>
      <Router>
        <Routing />
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
