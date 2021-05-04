import { QueryClient } from 'react-query'

const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        staleTime: Infinity,
      },
      mutations: {
        retry: 0,
      },
    },
  })
}

export default createQueryClient
