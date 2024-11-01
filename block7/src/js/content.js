export const myVariable = 'Block 7'

var readNext = document.querySelector('.expand-button')
var article__text = document.querySelector('.article__text')
//click event
readNext.children[0].src = 'img/expand.svg'
readNext.children[1].textContent = 'Читать далее'

var countClickExpand = 1
var clickOnExpand = function () {
  if (readNext.children[1].textContent === 'Показать всё') {
    countClickExpand = 1
  }
  countClickExpand++
  return countClickExpand
}

readNext.addEventListener('click', function () {
  var clickTrue = clickOnExpand()
  if (clickTrue % 2 === 0) {
    readNext.children[0].src = 'img/expandClose.svg'
    readNext.children[1].textContent = 'Скрыть'
    article__text.classList.add('article__text--overflow--scroll')
  } else {
    readNext.children[0].src = 'img/expand.svg'
    readNext.children[1].textContent = 'Читать далее'
    article__text.classList.remove('article__text--overflow--scroll')
  }
})
