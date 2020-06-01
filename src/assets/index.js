// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

import '../assets/scss/index.scss';
import mainSlider from './js/mainSlider';
import 'slick-carousel/slick/slick.css'

window.addEventListener('DOMContentLoaded', () => {
  mainSlider()
})


