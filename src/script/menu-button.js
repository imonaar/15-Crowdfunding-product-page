const hamburgerMenu = document.querySelector('.js-hamburger')
const jsOverlay = document.querySelector('.js-overlay')
const body = document.body

hamburgerMenu.addEventListener('click', ()=>{
    hamburgerMenu.classList.toggle('hamburger-close')
    jsOverlay.classList.toggle('show-menu')
    body.classList.toggle('menu-active')
})


const bookmarkBtns = Array.from(document.querySelectorAll('.js-bookmark'))
const bookmark = document.querySelector('.bookmark')

bookmarkBtns.forEach(btn=>{
    
    btn.addEventListener('click', ()=>{
        bookmark.classList.toggle('bookmarked')
    })
})