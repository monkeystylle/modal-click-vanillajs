const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

const handleCardButtonClick = e => {
  const button = e.currentTarget;
  const card = button.closest('.card');
  // grab the image src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  //populate the modal with the new Info
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')} alt="${name}" />
    <p>${desc}</p>
  `;

  //show the modal
  modalOuter.classList.add('open');
};

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

const closeModal = () => {
  modalOuter.classList.remove('open');
};

modalOuter.addEventListener('click', function (event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
