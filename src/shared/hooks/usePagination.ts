import { useEffect, useState } from 'react'

export const usePagination = <T>(
  initialArray: Array<T>,
  paginationValue: number,
  options?: Array<(initialArray: T[]) => T[]>,
): {
  sortedArray: Array<T>
  changePaginationValue: () => void
  pagination: number
} => {
  const [pagination, setPagination] = useState(paginationValue)
  const [sortedArray, setSortedArray] = useState(initialArray)
  const changePaginationValue = () => {
    setPagination((prevState) => prevState + paginationValue)
  }

  useEffect(() => {
    if (options?.length) {
      setSortedArray(
        options
          .reduce((result, option) => option(result), initialArray)
          .slice(0, pagination),
      )
    } else {
      setSortedArray(initialArray.slice(0, pagination))
    }
  }, [pagination])

  return {
    sortedArray,
    pagination,
    changePaginationValue,
  }
}
