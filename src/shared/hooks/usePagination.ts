import { useEffect, useState } from 'react'

export const usePagination = <T>(
  initialArray: Array<T>,
  paginationValue: number,
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
    setSortedArray(initialArray.slice(0, pagination))
  }, [initialArray, pagination])

  return {
    sortedArray,
    pagination,
    changePaginationValue,
  }
}
