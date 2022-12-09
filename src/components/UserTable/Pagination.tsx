import { useContext } from 'react'
import Context from '../../store/Context'
import './Pagination.css'

function Pagination(): JSX.Element {
  const { context, setContext } = useContext(Context)
  const { currentPage, min, max } = context.pagination

  const updatePagination = (value: number): void => {
    setContext({
      ...context,
      pagination: {
        ...context.pagination,
        currentPage: context.pagination.currentPage + value,
      },
    })
  }

  return (
    <div className='pagination'>
      <button
        className='pagination__button'
        title='previous'
        disabled={currentPage <= min}
        onClick={() => updatePagination(-1)}
      >
        &lt;
      </button>
      <p>
        Page {currentPage} of {max}
      </p>
      <button
        className='pagination__button'
        title='next'
        disabled={currentPage >= max}
        onClick={() => updatePagination(1)}
      >
        &gt;
      </button>
    </div>
  )
}

export default Pagination
