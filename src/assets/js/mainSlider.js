import $ from 'jquery'
import 'slick-carousel'

const mainSlider = () => {
  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: document.querySelector('.main-slider-arrows__prev'),
    nextArrow: document.querySelector('.main-slider-arrows__next')
  })
}

export default mainSlider;