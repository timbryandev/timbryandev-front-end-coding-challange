import './Pagination.css'

function Pagination (): JSX.Element {
  return (
    <div className='pagination'>
      <button className='pagination__button' title='previous'>
        &lt;
      </button>
      <button className='pagination__button' title='next'>
        &gt;
      </button>
    </div>
  )
}

export default Pagination
