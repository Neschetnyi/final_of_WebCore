export const myVariable = 'Block 7'

var button__upperMenuBurger = document.querySelector('.upper-menu__burger')
var burger_menu = document.querySelector('.burger-menu-cover')
var header_burger = document.querySelector('.burger-menu__header')
var nav_container = document.querySelector('.nav-container')
var bottom_burger = document.querySelector('.bottom-burger')
var burger_menu__button_close = document.querySelector(
  '.burger-menu__button-close'
)
var burger_menu__white_space = document.querySelector(
  '.burger-menu__white-space'
)
var nav_burger = document.querySelector('.nav-burger')
console.log(nav_burger)
var nav_elements = nav_burger.children
console.log(nav_elements)

var lastChecked = nav_elements[1]
lastChecked.classList.add('nav-burger__a--activ')
console.log(lastChecked)

for (let i = 0; i < nav_elements.length; i++) {
  nav_elements[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    lastChecked.classList.remove('nav-burger__a--activ')
    this.classList.add('nav-burger__a--activ')
    lastChecked = this
  })
}

function menu_open() {
  setTimeout(() => {
    document.body.style.position = 'fixed'
    document.body.style.top = `-${window.scrollY}px`
  }, 300)

  window.scrollTo(0, 0)

  burger_menu.classList.remove('burger-menu-cover--display--none')
  header_burger.classList.remove('burger-menu__header--transform')
  nav_container.classList.remove('nav-container--transform')
  bottom_burger.classList.remove('bottom-burger--transform')
}

function menu_close() {
  document.body.style.position = 'static'
  document.body.style.top = ''

  burger_menu.classList.add('burger-menu-cover--display--none')
  header_burger.classList.add('burger-menu__header--transform')
  nav_container.classList.add('nav-container--transform')
  bottom_burger.classList.add('bottom-burger--transform')
}

button__upperMenuBurger.addEventListener('click', function () {
  menu_open()
})

burger_menu__button_close.addEventListener('click', function () {
  menu_close()
})

burger_menu__white_space.addEventListener('click', function () {
  menu_close()
})

/*
nav_burger__a.classList.remove('nav-burger__a--activ')
nav_burger__a.classList.add('nav-burger__a--activ')

if (nav_burger__classList.contains('nav-burger__a--activ')) {
    alert('убрал')
  } else {
    alert('добавил')
  }
*/
