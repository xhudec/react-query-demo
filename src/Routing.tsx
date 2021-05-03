import { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import HomePage from 'pages/HomePage'

const Routing: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Redirect to="/" />
    </Switch>
  )
}

export default Routing
