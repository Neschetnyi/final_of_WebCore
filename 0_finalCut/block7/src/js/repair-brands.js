export const myVariable = 'Block 7'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let urls = [
  'img/Lenovo.png',
  'img/Samsung.png',
  'img/Apple.png',
  'img/VieewSonic.png',
  'img/Bosch.png',
  'img/Hp.png',
  'img/acer.png',
  'img/sony.png',
  'img/Lenovo.png',
  'img/Samsung.png',
  'img/Apple.png'
]

let brands = [
  'Lenovo',
  'Samsung',
  'Apple',
  'VieewSonic',
  'Bosch',
  'hp',
  'acer',
  'sony',
  'Lenovo',
  'Samsung',
  'Apple'
]

let showButton = document.querySelector('.show-all')
let swiperTemplate = document.querySelector('#repair-brands-template').content
let swiper__main = document.querySelector('.repair-brands__main')
let swiperContainer = document.querySelector('.swiper')
let shadow = document.querySelector('.repair-brands--shadow')

//content fill
let createElement = function (brand, url) {
  let repair_brands__element = swiperTemplate.querySelector(
    '.repair-brands__element'
  )
  repair_brands__element.children[0].alt = brand
  repair_brands__element.children[0].src = url
  return repair_brands__element
}

for (let i = 0; i < urls.length; i++) {
  let newElement = createElement(brands[i], urls[i])
  let clonedElement = newElement.cloneNode(true)
  swiper__main.appendChild(clonedElement)
}

//click event
showButton.children[0].src = 'img/expand.svg'
showButton.children[1].textContent = 'Показать всё'

let countClick = 1
let clickOn = function () {
  if (showButton.children[1].textContent === 'Показать всё') {
    countClick = 1
  }
  countClick++
  return countClick
}

showButton.addEventListener('click', function () {
  let clickTrue = clickOn()
  if (clickTrue % 2 === 0) {
    showButton.children[0].src = 'img/expandClose.svg'
    showButton.children[1].textContent = 'Скрыть'
    swiper__main.classList.add('repair-brands__main--height--fit-content')
  } else {
    showButton.children[0].src = 'img/expand.svg'
    showButton.children[1].textContent = 'Показать всё'
    swiper__main.classList.remove('repair-brands__main--height--fit-content')
    swiper__main.classList.add('repair-brands__main_laptop')
  }
})

//create pagination
let paginationEl = document.createElement('div')
paginationEl.className = 'swiper-pagination'
paginationEl.classList.add('pagination_style')
swiperContainer.appendChild(paginationEl)

//swiper function
let init = false
let swiper
function swiperChange() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true
      swiper = new Swiper('.repair-brands__swiper', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  } else if (init) {
    swiper.destroy()
    init = false
  }
}

//defolt setings
let windowWidth = window.innerWidth
if (windowWidth < 768) {
  swiperChange()
  swiper__main.classList.add('repair-brands__main--mob')
  showButton.classList.add('show-all--display-none')
  swiperContainer.classList.add('repair-brands__container--mob')
  shadow.classList.remove('swiper-shadow--display--none')
}
if (windowWidth >= 768) {
  swiperChange()
  shadow.classList.add('swiper-shadow--display--none')
  showButton.children[0].src = showButton.children[0].src
  showButton.children[1].textContent = showButton.children[1].textContent
  swiper__main.classList.add('repair-brands__main--laptop')
}

// resise event
window.addEventListener('resize', function () {
  windowWidth = window.innerWidth
  if (windowWidth < 768) {
    swiperChange()
    shadow.classList.remove('swiper-shadow--display--none')
    swiperContainer.classList.add('repair-brands__container--mob')
    swiper__main.classList.add('repair-brands__main--mob')
    showButton.classList.add('show-all--display-none')
    swiper__main.classList.remove('repair-brands__main--height--fit-content')
    swiper__main.classList.remove('repair-brands__main--laptop')
  }

  if (windowWidth >= 768) {
    swiperChange()
    shadow.classList.add('swiper-shadow--display--none')
    swiperContainer.classList.remove('repair-brands__container--mob')
    showButton.children[0].src = showButton.children[0].src
    showButton.children[1].textContent = showButton.children[1].textContent
    swiper__main.classList.add('repair-brands__main--laptop')
    swiper__main.classList.remove('repair-brands__main--mob')
    showButton.classList.remove('show-all--display-none')
    if (showButton.children[1].textContent === 'Скрыть') {
      swiper__main.classList.add('repair-brands__main--height--fit-content')
    }
  }
})
