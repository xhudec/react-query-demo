import { FC } from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/Header'
import { Heading, PageContent } from 'components/styled'

const HomePage: FC = () => {
  return (
    <div>
      <Header>Example App</Header>

      <PageContent>
        <Heading>PageContent</Heading>

        <nav>
          <ol>
            <li>
              <Link to="/country-list">Country list</Link>
            </li>
          </ol>
        </nav>
      </PageContent>
    </div>
  )
}

export default HomePage
