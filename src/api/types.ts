export interface IRickAndMortyLocation {
  name: string
  url: string
}

export interface IRickAndMortyCharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: IRickAndMortyLocation
  location: IRickAndMortyLocation
  image: string
  episode: string[]
  url: string
  created: string
}

export interface IRickAndMortyPaginationInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface IUseRickAndMortyCharacterListQueryVariables {
  page: number
}

export interface IFetchRickAndMortyCharacterListResponse {
  info: IRickAndMortyPaginationInfo
  results: IRickAndMortyCharacter[]
}

export interface IFetchRickAndMortyCharacterListGraphQLResponse {
  characters: IFetchRickAndMortyCharacterListResponse
}
