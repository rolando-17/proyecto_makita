const sidebar = document.querySelector('#sidebar')
const btnMenu = document.querySelector('#btn-menu')
const closeMenu = document.querySelector('#close-sidebar')

btnMenu.addEventListener('click', () => {
    sidebar.classList.toggle('openSidebar')
})
closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('openSidebar')
})
