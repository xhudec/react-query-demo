import { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import CountryListPage from 'pages/CountryList'
import RickAndMortyPage from 'pages/RickAndMortyList'
import ROUTES from 'config/routes'

const Routing: FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.home}>
        <HomePage />
      </Route>

      <Route exact path={ROUTES.countryList}>
        <CountryListPage />
      </Route>

      <Route exact path={ROUTES.rickAndMorty}>
        <RickAndMortyPage />
      </Route>

      <Redirect to="/" />
    </Switch>
  )
}

export default Routing
