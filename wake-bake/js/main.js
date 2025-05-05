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

const modal = document.querySelector('.modal');
const imgGiftButton = document.querySelector('.about__img-button');
const modalCancel = document.querySelector('.modal__cancel');

imgGiftButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    modal.classList.add('modal--opened');
});

modalCancel.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.remove('modal--opened');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('modal--opened');
    }
});

// =====================tab-content--show===============================

const tabControls = document.querySelector('.tab-controls')
tabControls.addEventListener('click', toggleTab)

function toggleTab(event) {

    const tabControl = event.target.closest('.tab-controls__link')

    if (!tabControl) return
    event.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabContentID = (tabControl.getAttribute('href'));
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
        activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
        activeContent.classList.remove('tab-content--show')
    }
    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')
}

// ==================Accordion====================================================
document.querySelectorAll('.accordion-list__item').forEach(item => {
    const content = item.querySelector('.accordion-list__content');
    
    content.style.maxHeight = '0';
    const text = content.querySelector('.accordion-content__text');
    text.style.opacity = '0';

    item.querySelector('.accordion-list__control').addEventListener('click', function() {
        document.querySelectorAll('.accordion-list__item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('accordion-list__item--opened');
                const otherContent = otherItem.querySelector('.accordion-list__content');
                otherContent.style.maxHeight = '0';
                const otherText = otherContent.querySelector('.accordion-content__text');
                otherText.style.opacity = '0';
            }
        });

        const content = item.querySelector('.accordion-list__content');
        const accordionOpened = item.classList.toggle('accordion-list__item--opened');

        if (accordionOpened) {
            content.style.maxHeight = content.scrollHeight + 'px';
            setTimeout(() => {
                const text = content.querySelector('.accordion-content__text');
                text.style.opacity = '1';
            }, 10);
        } else {
            content.style.maxHeight = '0';
            const text = content.querySelector('.accordion-content__text');
            text.style.opacity = '0';
        }
    });
});