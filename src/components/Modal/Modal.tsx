import { useContext, useEffect } from 'react'
import Context from '../../store/Context'
import { ContextState } from '../../store/types'
import './Modal.css'

function Modal (): JSX.Element | null {
  const { context, setContext } = useContext(Context)
  const { content, title, visible } = context.modal

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

  useEffect(() => {
    const closeModalOnEscKey = (evt: KeyboardEvent): void => {
      if (evt.key === 'Escape') {
        setContext((prev: ContextState) => ({
          ...prev,
          modal: {
            ...prev.modal,
            visible: false
          }
        }))
      }
    }

    document.addEventListener('keyup', closeModalOnEscKey)

    return () => {
      document.removeEventListener('keyup', closeModalOnEscKey)
    }
  }, [])

  return (
    <div className='modal'>
      <div className='modal__content'>
        <header className='modal__header'>
          {typeof title === 'string' && <h2>{title}</h2>}
          <button
            onClick={handleClose}
            className='modal__close modal__close--header'
          >
            &times;
          </button>
        </header>
        <section>{content}</section>
      </div>
    </div>
  )
}

export default Modal
