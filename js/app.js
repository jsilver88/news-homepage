const sidebar = document.querySelector('.sidebar')
const hamburger = document.querySelector('.hamburger')
const hamburgerClose = document.querySelector('.hamburger-close')

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active')
})

hamburgerClose.addEventListener('click', () => {
    sidebar.classList.remove('active')
})