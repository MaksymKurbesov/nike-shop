import $ from 'jquery'
import 'slick-carousel'

const mainSlider = () => {
  $('.main-slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
}

export default mainSlider;