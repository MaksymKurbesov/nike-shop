// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import { SHOES } from './js/mock/shoes';
import mainSlider from './js/mainSlider';
import 'slick-carousel/slick/slick.css';
import 'animate.css'
import '../assets/scss/index.scss';
import starsRating from './js/starsRating';
import showProductDetails from './js/showProductDetails';
import changeColorShoes from './js/changeColorShoes';
import openMenu from './js/openMenu'
import renderProducts from './js/renderProducts';
import filter from './js/filter';
import addProductToCart from './js/addProductToCart';

window.addEventListener('DOMContentLoaded', () => {
  mainSlider()
  changeColorShoes()
  openMenu()
  renderProducts(SHOES)
  starsRating()
  filter()
  showProductDetails()
  addProductToCart()
})
