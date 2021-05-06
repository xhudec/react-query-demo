import { QueryFunctionContext, useQuery, UseQueryOptions } from 'react-query'

import { IFetchRickAndMortyCharacterListResponse } from './types'

import env from 'config/env'

interface IUseRickAndMortyCharacterListQueryVariables {
  page: number
}

const fetchRickAndMortyCharacterList = async ({ queryKey }: QueryFunctionContext) => {
  const [, { page }] = queryKey as [string, IUseRickAndMortyCharacterListQueryVariables]

  const response = await fetch(`${env.restApiUrl}/character?page=${page}`, {
    method: 'GET',
  })

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
  return useQuery(['RickAndMortyCharacterList', variables], fetchRickAndMortyCharacterList, options)
}

export default useRickAndMortyCharacterListQuery
export { fetchRickAndMortyCharacterList }
