import style from './Modal.module.css'
import { createPortal } from 'react-dom'

const BackDrop = ({ close, show }) => (
  <div
    className={`${style.backDrop} ${show ? style.showBackDrop : null}`}
    onClick={close}></div>
)
const Overlay = ({ Children, show }) => (
  <div className={`${style.overlay} ${show ? style.showOverlay : null}`}>
    {Children}
  </div>
)

const Modal = ({ Children, show, closeModal }) => {
  return (
    <>
      {createPortal(
        <>
          <BackDrop close={closeModal} show={show} />
          <Overlay show={show} Children={Children}/>
        </>,
        document.getElementById('modal')
      )}
    </>
  )
}

export default Modal
