
const btnOpen = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__close-btn');


btnOpen.addEventListener('click', () => {
    modal.classList.add('modal--open');
});


btnClose.addEventListener('click', () => {
    modal.classList.remove('modal--open');
});

