import { FC } from 'react'

import { NavigationList, NavigationListItem } from './styled'

import Header from 'components/Header'
import { CustomLink, Heading, PageContent } from 'components/styled'
import ROUTES from 'config/routes'

const HomePage: FC = () => {
  return (
    <div>
      <Header>
        <CustomLink to="/">React Query Demo</CustomLink>
      </Header>

      <PageContent>
        <Heading>Examples</Heading>

        <nav>
          <NavigationList>
            <NavigationListItem>
              <CustomLink to={ROUTES.rickAndMortyRest}>Rick and Morty (REST)</CustomLink>
            </NavigationListItem>

            <NavigationListItem>
              <CustomLink to={ROUTES.rickAndMortyGraphQL}>Rick and Morty (GraphQL)</CustomLink>
            </NavigationListItem>

            <NavigationListItem>
              <CustomLink to={ROUTES.countryListGraphQL}>Countries (GraphQL codegen)</CustomLink>
            </NavigationListItem>
          </NavigationList>
        </nav>
      </PageContent>
    </div>
  )
}

export default HomePage
