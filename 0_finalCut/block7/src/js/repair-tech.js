export const myVariable = 'Block 7'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let tech_text = [
  'Ремонт ноутбуков',
  'Ремонт планшетов',
  'Ремонт ПК',
  'Ремонт мониторов',
  'Ремонт ноутбуков',
  'Ремонт планшетов',
  'Ремонт ПК',
  'Ремонт мониторов'
]

let showButton = document.querySelector('.show-all2')
let swiperTemplate = document.querySelector('#repair-tech-template').content
let repair_tech = document.querySelector('.repair-tech__main')
let swiperContainer = document.querySelector('.repair-tech__swiper')
let shadow = document.querySelector('.repair-tech--shadow')

//content fill
let createElement = function (text) {
  let repair_tech__element = swiperTemplate.querySelector(
    '.repair-tech__element'
  )
  repair_tech__element.children[0].textContent = text
  return repair_tech__element
}

for (let i = 0; i < tech_text.length; i++) {
  let newElement = createElement(tech_text[i])
  let clonedElement = newElement.cloneNode(true)
  repair_tech.appendChild(clonedElement)
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
    repair_tech.classList.add('repair-tech__main--height--fit-content')
  } else {
    showButton.children[0].src = 'img/expand.svg'
    showButton.children[1].textContent = 'Показать всё'
    repair_tech.classList.remove('repair-tech__main--height--fit-content')
    repair_tech.classList.add('repair-tech__main_laptop')
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
      swiper = new Swiper('.repair-tech__swiper', {
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
  repair_tech.classList.add('repair-tech__main--mob')
  showButton.classList.add('show-all--display-none')
  swiperContainer.classList.add('repair-tech__container--mob')
  shadow.classList.remove('swiper-shadow--display--none')
}
if (windowWidth >= 768) {
  swiperChange()
  shadow.classList.add('swiper-shadow--display--none')
  showButton.children[0].src = showButton.children[0].src
  showButton.children[1].textContent = showButton.children[1].textContent
  repair_tech.classList.add('repair-tech__main--laptop')
}

// resise event
window.addEventListener('resize', function () {
  windowWidth = window.innerWidth
  if (windowWidth < 768) {
    swiperChange()
    shadow.classList.remove('swiper-shadow--display--none')
    swiperContainer.classList.add('repair-tech__container--mob')
    repair_tech.classList.add('repair-tech__main--mob')
    showButton.classList.add('show-all--display-none')
    repair_tech.classList.remove('repair-tech__main--height--fit-content')
    repair_tech.classList.remove('repair-tech__main--laptop')
  }

  if (windowWidth >= 768) {
    swiperChange()
    shadow.classList.add('swiper-shadow--display--none')
    swiperContainer.classList.remove('repair-tech__container--mob')
    showButton.children[0].src = showButton.children[0].src
    showButton.children[1].textContent = showButton.children[1].textContent
    repair_tech.classList.add('repair-tech__main--laptop')
    repair_tech.classList.remove('repair-tech__main--mob')
    showButton.classList.remove('show-all--display-none')
    if (showButton.children[1].textContent === 'Скрыть') {
      repair_tech.classList.add('repair-tech__main--height--fit-content')
    }
  }
})
