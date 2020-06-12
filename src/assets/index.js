// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import mainSlider from './js/mainSlider';
import 'slick-carousel/slick/slick.css';
import 'animate.css'
import '../assets/scss/index.scss';
import starsRating from './js/starsRating';
import showProductDetails from './js/showProductDetails';
import changeColorShoes from './js/changeColorShoes';

window.addEventListener('DOMContentLoaded', () => {
  mainSlider()
  starsRating()
  showProductDetails()
  changeColorShoes()
})


