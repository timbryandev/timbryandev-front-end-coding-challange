import { useContext, useEffect, useRef } from 'react'
import Context from '../../store/Context'
import { ContextState } from '../../store/types'
import './Modal.css'

function Modal (): JSX.Element | null {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
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

  const closeModalOnEscKey = (evt: KeyboardEvent): void => {
    if (evt.key === 'Escape') {
      handleClose()
    }
  }

  const closeModalOnBackgroundClick = (evt: MouseEvent): void => {
    if (evt.target === backgroundRef.current) { handleClose() }
  }

  useEffect(() => {
    document.addEventListener('keyup', closeModalOnEscKey)
    document.addEventListener('click', closeModalOnBackgroundClick)

    return () => {
      document.removeEventListener('keyup', closeModalOnEscKey)
      document.removeEventListener('click', closeModalOnBackgroundClick)
    }
  }, [])

  useEffect(() => {
    const button = closeRef.current
    if (button !== null) {
      button.focus()
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className='modal' ref={backgroundRef}>
      <div className='modal__content'>
        <header className='modal__header'>
          {typeof title === 'string' && <h2>{title}</h2>}
          <button
            ref={closeRef}
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
