// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle('modal-open');
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// select the open-btn button
let openBtn = document.getElementById('open-btn');
// select the modal-background
let modalBackground = document.getElementById('modal-background');
// select the close-btn
let closeBtn = document.getElementById('close-btn');

// shows the modal when the user clicks open-btn
openBtn.addEventListener('click', function () {
  modalBackground.style.display = 'block';
});

// hides the modal when the user clicks close-btn
closeBtn.addEventListener('click', function () {
  modalBackground.style.display = 'none';
});

// hides the modal when the user clicks outside the modal
window.addEventListener('click', function (event) {
  // check if the event happened on the modal-background
  if (event.target === modalBackground) {
    // hides the modal
    modalBackground.style.display = 'none';
  }
});

var scroller = {
  target: document.querySelector('#scroll-container'),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};
