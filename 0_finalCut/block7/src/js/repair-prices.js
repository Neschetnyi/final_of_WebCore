export const myVariable = 'Block 7'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

let prices_text = [
  'Диагностика',
  'Замена дисплея',
  'Замена полифонического динамика',
  'Тестирование с выдачей технического заключения',
  'Замена программного обеспечения'
]

let prices_price = ['Бесплатно', '1 000 ₽', '1 000 ₽', '1 000 ₽', '1 000 ₽']

let prices_time = [
  '30 мин',
  '30-120 мин',
  '30-120 мин',
  '30-120 мин',
  '30-120 мин'
]

let swiper_pricesTemplate = document.querySelector(
  '#repair-prices-template'
).content
let repair_prices = document.querySelector('.repair-prices__main')
let swiperContainer = document.querySelector('.repair-prices__swiper')
let shadow = document.querySelector('.repair-prices--shadow')

//content fill
let createElement = function (text, price, time) {
  let repair_prices__element = swiper_pricesTemplate.querySelector(
    '.repair-prices__element'
  )
  repair_prices__element.children[0].children[0].children[1].textContent = text
  repair_prices__element.children[0].children[1].children[1].textContent = price
  repair_prices__element.children[0].children[2].children[1].textContent = time

  return repair_prices__element
}

for (let i = 0; i < prices_text.length; i++) {
  let newElement = createElement(
    prices_text[i],
    prices_price[i],
    prices_time[i]
  )

  let clonedElement = newElement.cloneNode(true)
  repair_prices.appendChild(clonedElement)
  let order_button = clonedElement.querySelector('.repair-prices__a')
  console.log(order_button)
  order_button.addEventListener('click', function (evt) {
    console.log('added')
    evt.preventDefault()
  })
}

//create pagination
let paginationEl = document.createElement('div')
paginationEl.className = 'swiper-pagination'
paginationEl.classList.add('pagination_style')
swiperContainer.appendChild(paginationEl)

//swiper function
let init = false
let swiper3
function swiperChange() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true
      swiper3 = new Swiper('.repair-prices__swiper', {
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
    swiper3.destroy()
    init = false
  }
}

//defolt setings
let windowWidth = window.innerWidth
if (windowWidth < 768) {
  swiperChange()
  repair_prices.classList.add('repair-prices__main--mob')
  swiperContainer.classList.add('repair-prices__container--mob')
  shadow.classList.remove('swiper-shadow--display--none')
}
if (windowWidth >= 768) {
  swiperChange()
  shadow.classList.add('swiper-shadow--display--none')
  repair_prices.classList.add('repair-prices__main--laptop')
}

// resise event
window.addEventListener('resize', function () {
  windowWidth = window.innerWidth
  if (windowWidth < 768) {
    swiperChange()
    shadow.classList.remove('swiper-shadow--display--none')
    swiperContainer.classList.add('repair-prices__container--mob')
    repair_prices.classList.add('repair-prices__main--mob')
    repair_prices.classList.remove('repair-prices__main--height--fit-content')
    repair_prices.classList.remove('repair-prices__main--laptop')
  }

  if (windowWidth >= 768) {
    swiperChange()
    shadow.classList.add('swiper-shadow--display--none')
    swiperContainer.classList.remove('repair-prices__container--mob')
    repair_prices.classList.add('repair-prices__main--laptop')
    repair_prices.classList.remove('repair-prices__main--mob')
  }
})
