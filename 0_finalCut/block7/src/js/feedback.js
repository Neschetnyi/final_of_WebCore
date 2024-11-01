export const myVariable = 'Block 7'

var button__chat = document.querySelectorAll('.chat-button')
var feedback_menu = document.querySelector('.feedback-menu-cover')
var header_feedback = document.querySelector('.feedback-menu__header')
var form_container = document.querySelector('.form-container')
var bottom_feedback = document.querySelector('.bottom-feedback')
var feedback_menu__button_close = document.querySelector(
  '.feedback-menu__button-close'
)
var feedback_menu__white_space = document.querySelector(
  '.feedback-menu__white-space'
)

function menu_open_feedback() {
  feedback_menu.classList.remove('feedback-menu-cover--desktop')
  feedback_menu.classList.remove('feedback-menu-cover--display--none')
  header_feedback.classList.remove('feedback-menu__header--transform')
  form_container.classList.remove('form-container--transform')
  bottom_feedback.classList.remove('bottom-feedback--transform')
}

function menu_close_feedback() {
  feedback_menu.classList.add('feedback-menu-cover--desktop')
  feedback_menu.classList.add('feedback-menu-cover--display--none')
  header_feedback.classList.add('feedback-menu__header--transform')
  form_container.classList.add('form-container--transform')
  bottom_feedback.classList.add('bottom-feedback--transform')
}

for (let i = 0; i < button__chat.length; i++) {
  button__chat[i].addEventListener('click', function () {
    menu_open_feedback()
  })
}

feedback_menu__button_close.addEventListener('click', function () {
  menu_close_feedback()
})

feedback_menu__white_space.addEventListener('click', function () {
  menu_close_feedback()
})
