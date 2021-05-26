import { QueryFunctionContext, useQuery, UseQueryOptions } from 'react-query'

import {
  EQueryKeys,
  IFetchRickAndMortyCharacterListResponse,
  IUseRickAndMortyCharacterListQueryVariables,
} from '../types'

import env from 'config/env'

const fetchRickAndMortyCharacterList = async ({ queryKey }: QueryFunctionContext) => {
  const [, { page }] = queryKey as [string, IUseRickAndMortyCharacterListQueryVariables]
  const searchParams = new URLSearchParams({ page: `${page}` })

  const response = await fetch(
    `${env.rickAndMortyApiUrl}/api/character?${searchParams.toString()}`,
    {
      method: 'GET',
    }
  )

  if (!response.ok) {
    console.error('[fetchRickAndMortyCharacterList]', response)

    throw new Error('Failed to fetch Rick and Morty characters.')
  }

  return (await response.json()) as IFetchRickAndMortyCharacterListResponse
}

const useRickAndMortyCharacterListQuery = (
  variables: IUseRickAndMortyCharacterListQueryVariables,
  options?: UseQueryOptions<IFetchRickAndMortyCharacterListResponse, Error>
) => {
  return useQuery(
    [EQueryKeys.RickAndMortyCharacterListREST, variables],
    fetchRickAndMortyCharacterList,
    options
  )
}

export default useRickAndMortyCharacterListQuery
export { fetchRickAndMortyCharacterList }
