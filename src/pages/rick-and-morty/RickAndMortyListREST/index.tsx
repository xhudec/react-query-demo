import { FC } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

import CharacterListView from '../components/CharacterListView'
import usePagination from '../hooks/usePagination'
import { PaginationControlButton } from '../components/styled'

import Header from 'components/Header'
import { CustomLink, Heading, PageContent } from 'components/styled'
import useRickAndMortyCharacterListQuery from 'api/rest/rickAndMortyCharacterList'
import ROUTES from 'config/routes'

const RickAndMortyListRESTPage: FC = () => {
  const { page, previousPage, nextPage } = usePagination()

  const { data, isFetching } = useRickAndMortyCharacterListQuery(
    { page },
    {
      cacheTime: Infinity,
      placeholderData: {
        info: {
          count: 0,
          pages: 0,
          prev: null,
          next: null,
        },
        results: Array(20).fill(null),
      },
    }
  )

  return (
    <div>
      <Header>
        <CustomLink to={ROUTES.home}>React Query Demo</CustomLink>
      </Header>
      <PageContent>
        <Heading>Rick and Morty Characters (REST) {isFetching ? '...' : ''}</Heading>

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
            disabled={!data?.info?.next}
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

export default RickAndMortyListRESTPage
