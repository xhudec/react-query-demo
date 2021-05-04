import { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import CountryListPage from 'pages/CountryList'

const Routing: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/country-list">
        <CountryListPage />
      </Route>

      <Redirect to="/" />
    </Switch>
  )
}

export default Routing
