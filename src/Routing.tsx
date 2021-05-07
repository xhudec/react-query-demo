import { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import HomePage from 'pages/Home'
import CountryListPage from 'pages/countries/CountryList'
import RickAndMortyListRESTPage from 'pages/rick-and-morty/RickAndMortyListREST'
import RickAndMortyListGraphQLPage from 'pages/rick-and-morty/RickAndMortyListGraphQL'

import ROUTES from 'config/routes'

const Routing: FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.home}>
        <HomePage />
      </Route>

      <Route exact path={ROUTES.rickAndMortyRest}>
        <RickAndMortyListRESTPage />
      </Route>
      <Route exact path={ROUTES.rickAndMortyGraphQL}>
        <RickAndMortyListGraphQLPage />
      </Route>
      <Redirect exact from={ROUTES.rickAndMortyBase} to={ROUTES.rickAndMortyRest} />

      <Route exact path={ROUTES.countryListGraphQL}>
        <CountryListPage />
      </Route>
      <Redirect exact from={ROUTES.countryListBase} to={ROUTES.countryListGraphQL} />

      <Redirect to="/" />
    </Switch>
  )
}

export default Routing
