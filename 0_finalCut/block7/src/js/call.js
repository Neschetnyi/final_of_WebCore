export const myVariable = 'Block 7'

var button__chat = document.querySelectorAll('.call-button')
var call_menu = document.querySelector('.call-menu-cover')
var header_call = document.querySelector('.call-menu__header')
var form_call_container = document.querySelector('.form-call-container')
var bottom_call = document.querySelector('.bottom-call')
var call_menu__button_close = document.querySelector('.call-menu__button-close')
var call_menu__white_space = document.querySelector('.call-menu__white-space')

function menu_open_call() {
  call_menu.classList.remove('call-menu-cover--desktop')
  call_menu.classList.remove('call-menu-cover--display--none')
  header_call.classList.remove('call-menu__header--transform')
  form_call_container.classList.remove('form-call-container--transform')
  bottom_call.classList.remove('bottom-call--transform')
}

function menu_close_call() {
  call_menu.classList.add('call-menu-cover--desktop')
  call_menu.classList.add('call-menu-cover--display--none')
  header_call.classList.add('call-menu__header--transform')
  form_call_container.classList.add('form-call-container--transform')
  bottom_call.classList.add('bottom-call--transform')
}

for (let i = 0; i < button__chat.length; i++) {
  button__chat[i].addEventListener('click', function () {
    menu_open_call()
  })
}

call_menu__button_close.addEventListener('click', function () {
  menu_close_call()
})

call_menu__white_space.addEventListener('click', function () {
  menu_close_call()
})
