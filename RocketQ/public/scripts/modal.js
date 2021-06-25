export default function Modal() {

  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener("click", close)

  function open() {
    // atribuir active do modal
    modalWrapper.classList.add('active');
  }
  function close() {
    // remover active do modal
    modalWrapper.classList.remove('active');
  }

  return {
    open,
    close
  }
}