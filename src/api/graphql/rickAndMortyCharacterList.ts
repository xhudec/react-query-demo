import { QueryFunctionContext, useQuery, UseQueryOptions } from 'react-query'
import request, { gql } from 'graphql-request'

import {
  IFetchRickAndMortyCharacterListGraphQLResponse,
  IFetchRickAndMortyCharacterListResponse,
  IUseRickAndMortyCharacterListQueryVariables,
} from 'api/types'
import env from 'config/env'

const RickAndMortyCharacterListQuery = gql`
  query CharacterList($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`

const fetchRickAndMortyCharacterList = async ({ queryKey }: QueryFunctionContext) => {
  const [, { page }] = queryKey as [string, IUseRickAndMortyCharacterListQueryVariables]

  const response = await request<IFetchRickAndMortyCharacterListGraphQLResponse>(
    `${env.rickAndMortyApiUrl}/graphql`,
    RickAndMortyCharacterListQuery,
    { page }
  )

  return response.characters
}

const useRickAndMortyCharacterListQuery = (
  variables: IUseRickAndMortyCharacterListQueryVariables,
  options?: UseQueryOptions<IFetchRickAndMortyCharacterListResponse, Error>
) => {
  return useQuery(
    ['RickAndMortyCharacterListGraphQL', variables],
    fetchRickAndMortyCharacterList,
    options
  )
}

export default useRickAndMortyCharacterListQuery
