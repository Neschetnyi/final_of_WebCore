export const myVariable = 'Block 7'

var button__upperMenuBurger = document.querySelector('.upper-menu__burger')
var burger_menu = document.querySelector('.burger-menu-cover')
var header_burger = document.querySelector('.burger-menu__header')
var nav_container = document.querySelector('.nav-container')
var bottom_burger = document.querySelector('.bottom-burger')
var burger_menu_inner = document.querySelector('.burger-menu--transform')
var burger_menu__button_close = document.querySelector(
  '.burger-menu__button-close'
)
var burger_menu__white_space = document.querySelector(
  '.burger-menu__white-space'
)
var nav_burger = document.querySelectorAll('.nav-burger__a')
var languages = document.querySelectorAll('.language__lang')

function menu_open() {
  setTimeout(() => {
    document.body.style.top = `-${window.scrollY}px`
  }, 300)

  window.scrollTo(0, 0)

  burger_menu.classList.remove('burger-menu-cover--display--none')
  header_burger.classList.remove('burger-menu__header--transform')
  burger_menu_inner.classList.remove('burger-menu--transform')
  nav_container.classList.remove('nav-container--transform')
  bottom_burger.classList.remove('bottom-burger--transform')
}

function menu_close() {
  document.body.style.top = ''

  burger_menu.classList.add('burger-menu-cover--display--none')
  burger_menu_inner.classList.add('burger-menu--transform')
  header_burger.classList.add('burger-menu__header--transform')
  nav_container.classList.add('nav-container--transform')
  bottom_burger.classList.add('bottom-burger--transform')
}

button__upperMenuBurger.addEventListener('click', function (evt) {
  evt.preventDefault()
  menu_open()
})

burger_menu__button_close.addEventListener('click', function () {
  menu_close()
})

burger_menu__white_space.addEventListener('click', function () {
  menu_close()
})

let lastChecked = nav_burger[1]
lastChecked.classList.add('nav-burger__a--activ')
console.log(lastChecked)

for (let i = 0; i < nav_burger.length; i++) {
  nav_burger[i].addEventListener('click', function (evt) {
    lastChecked.classList.remove('nav-burger__a--activ')
    nav_burger[i].classList.add('nav-burger__a--activ')
    lastChecked = nav_burger[i]
    evt.preventDefault()
  })
}

let lastCheckedLang = languages[0]
lastCheckedLang.classList.add('language__lang--active')
console.log(lastCheckedLang)

for (let i = 0; i < languages.length; i++) {
  languages[i].addEventListener('click', function (evt) {
    lastCheckedLang.classList.remove('language__lang--active')
    languages[i].classList.add('language__lang--active')
    lastCheckedLang = languages[i]
    evt.preventDefault()
  })
}
