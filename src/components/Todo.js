import { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {

  const [modalIsOpen, setIsModalIsOpen] = useState(false)

  function closeModalHandler() {
    setIsModalIsOpen(false)
  }

  function deleteHandler() {
    setIsModalIsOpen(true)
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  )
}

export default Todo;