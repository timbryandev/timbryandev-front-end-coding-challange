import { useContext } from 'react'
import Context from '../../store/Context'
import './Pagination.css'

function Pagination (): JSX.Element {
  const { context, setContext } = useContext(Context)
  const { firstPage, page, totalPages } = context.pagination

  const updatePagination = (value: number): void => {
    setContext({
      ...context,
      pagination: {
        ...context.pagination,
        page: context.pagination.page + value
      }
    })
  }

  return (
    <div className='pagination'>
      <button
        className='pagination__button'
        title='previous'
        disabled={page <= firstPage}
        onClick={() => updatePagination(-1)}
      >
        &lt;
      </button>
      <p>
        Page {page} of {totalPages}
      </p>
      <button
        className='pagination__button'
        title='next'
        disabled={page >= totalPages}
        onClick={() => updatePagination(1)}
      >
        &gt;
      </button>
    </div>
  )
}

export default Pagination
