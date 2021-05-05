import { FC } from 'react'

import Header from 'components/Header'
import { CustomLink, Heading, PageContent } from 'components/styled'

const HomePage: FC = () => {
  return (
    <div>
      <Header>
        <CustomLink to="/">Example App</CustomLink>
      </Header>

      <PageContent>
        <Heading>PageContent</Heading>

        <nav>
          <ol>
            <li>
              <CustomLink to="/country-list">Country list</CustomLink>
            </li>
            <li>
              <CustomLink to="/rick-and-morty">Rick and Morty</CustomLink>
            </li>
          </ol>
        </nav>
      </PageContent>
    </div>
  )
}

export default HomePage
