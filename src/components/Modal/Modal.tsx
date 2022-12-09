import { useContext } from 'react'
import Context from '../../store/Context'
import { ContextState } from '../../store/types'
import { ModalState } from '../../types'
import './Modal.css'

function Modal (): JSX.Element | null {
  // @ts-expect-error
  const { context, setContext } = useContext(Context)
  const { actions, content, title, visible } = context.modal as ModalState

  function handleClose (): void {
    setContext((prev: ContextState) => ({
      ...prev,
      modal: {
        ...prev.modal,
        visible: false
      }
    }))
  }

  if (!visible) return null

  return (
    <div className='modal'>
      <div className='modal__content'>
        <header className='modal__header'>
          {typeof title === 'string' && <h2>{title}</h2>}
          <span onClick={handleClose} role='button'>
            x
          </span>
        </header>
        <section>{content}</section>
        <footer>
          <>
            {actions?.map(([label, fn]) => (
              <button onClick={fn}>{label}</button>
            ))}
            <button onClick={handleClose} role='button'>
              Close
            </button>
          </>
        </footer>
      </div>
    </div>
  )
}

export default Modal
