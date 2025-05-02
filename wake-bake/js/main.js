// ========================burger-menu==================================================
(function () {
    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');
        if (burgerIcon) {
            document.body.classList.toggle('body--opened-menu');
            return;
        }
        if (document.documentElement.clientWidth > 900) {
            return
        }
        if (burgerNavLink) {
            document.body.classList.remove('body--opened-menu');
        }
    }
})();


// =================================modal==================================

const modal = document.querySelector('.modal')
const imgGiftButton = document.querySelector('.about__img-button')
const modalCancel = document.querySelector('.modal__cancel')

imgGiftButton.addEventListener('click', () => modal.classList.add('modal--opened'))
modalCancel.addEventListener('click', (event) => {
    event.preventDefault()
    modal.classList.remove('modal--opened')
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('modal--opened');
    }
});