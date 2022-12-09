import { useContext } from 'react'
import Context from '../../store/Context'
import './Pagination.css'

function Pagination (): JSX.Element {
  const { context, setContext } = useContext(Context)
  const { pagination } = context

  const updatePagination = (value: number): void => {
    setContext({ ...context, pagination: context.pagination + value })
  }

  return (
    <div className='pagination'>
      <button
        className='pagination__button'
        title='previous'
        disabled={pagination <= 1}
        onClick={() => updatePagination(-1)}
      >
        &lt;
      </button>
      <button
        className='pagination__button'
        title='next'
        onClick={() => updatePagination(1)}
      >
        &gt;
      </button>
    </div>
  )
}

export default Pagination
