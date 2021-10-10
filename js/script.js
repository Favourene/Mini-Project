//nav bar.......................................

const nav = document.getElementsByClassName('navbar')[0]
const bars = document.getElementsByClassName('fa-bars')[0]
const times = document.getElementsByClassName('fa-times')[0]

bars.onclick = function () {
  'use strict'
  nav.classList.toggle('collapse')
  times.classList.add('show')
  bars.classList.add('hide')
}
times.onclick = function () {
  'use strict'
  nav.classList.toggle('collapse')
  times.classList.remove('show')
  bars.classList.remove('hide')
}

  //  <!-- Initialize Swiper -->
var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 20,
  centeredSlides: true,
})