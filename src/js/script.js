window.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.hamburger'),
        menuToggle = document.querySelector('.menu'),
        menuItems = document.querySelectorAll('.menu_item')

  hamburgerBtn.addEventListener('click', () => toggleMenuFunc())
  menuItems.forEach(item => item.addEventListener('click', ()=> hideMenu()))

  function toggleMenuFunc(){
    hamburgerBtn.classList.toggle('hamburger_active')
    menuToggle.classList.toggle('menu_active')
  }

  function hideMenu(){
    menuToggle.classList.remove('menu_active')
    hamburgerBtn.classList.toggle('hamburger_active')
  }
})