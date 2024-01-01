/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBnt = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')

}

modalBnt.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)

    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })

    })

})


/*=MIXITUP FILTER PORTFOLIO=*/
let mixerProtfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card '
    },
    animation: {
        duration: 300
    }
});
/* ==Link active work ==*/
function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')

}
linkWork.forEach(l => l.addEventListener('click, activeWork'))

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/