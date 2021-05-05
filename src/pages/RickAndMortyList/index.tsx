import { FC } from 'react'

import Header from 'components/Header'
import { CustomLink, Heading, PageContent } from 'components/styled'
import ROUTES from 'config/routes'

const RickAndMortyPage: FC = () => {
  return (
    <div>
      <Header>
        <CustomLink to={ROUTES.home}>Example App</CustomLink>
      </Header>
      <PageContent>
        <Heading>Rick and Morty Characters</Heading>
      </PageContent>
    </div>
  )
}

export default RickAndMortyPage
