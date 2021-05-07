import { useCallback, useState } from 'react'

const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage)

  const nextPage = useCallback(() => {
    setPage((state) => state + 1)
  }, [])

  const previousPage = useCallback(() => {
    setPage((state) => state - 1)
  }, [])

  return {
    page,
    setPage,
    nextPage,
    previousPage,
  }
}

export default usePagination
