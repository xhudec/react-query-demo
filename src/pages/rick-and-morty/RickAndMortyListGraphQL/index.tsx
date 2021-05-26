import { FC } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

import CharacterListView from '../components/CharacterListView'
import usePagination from '../hooks/usePagination'
import { PaginationControlButton } from '../components/styled'

import Header from 'components/Header'
import { CustomLink, Heading, PageContent } from 'components/styled'
import useRickAndMortyCharacterListQuery from 'api/graphql/rickAndMortyCharacterList'
import ROUTES from 'config/routes'

const RickAndMortyListGraphQLPage: FC = () => {
  const { page, previousPage, nextPage } = usePagination()

  const { data, isFetching, isPreviousData } = useRickAndMortyCharacterListQuery(
    { page },
    {
      staleTime: Infinity,
      keepPreviousData: true,
    }
  )

  return (
    <div>
      <Header>
        <CustomLink to={ROUTES.home}>React Query Demo</CustomLink>
      </Header>
      <PageContent>
        <Heading>Rick and Morty Characters (GraphQL){isFetching ? '...' : null}</Heading>

        <div>
          <PaginationControlButton
            type="button"
            disabled={!data?.info?.prev}
            position="left"
            onClick={previousPage}
          >
            <ChevronLeft size={64} />
          </PaginationControlButton>

          <CharacterListView characters={data?.results ?? []} isFetching={isFetching} />

          <PaginationControlButton
            type="button"
            disabled={isPreviousData || !data?.info?.next}
            position="right"
            onClick={nextPage}
          >
            <ChevronRight size={64} />
          </PaginationControlButton>
        </div>
      </PageContent>
    </div>
  )
}

export default RickAndMortyListGraphQLPage
