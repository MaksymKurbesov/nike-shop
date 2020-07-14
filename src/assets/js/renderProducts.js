import { SVG_ICONS } from './mock/svg';
import starsRating from './starsRating';
import showProductDetails from './showProductDetails';
import addProductToCart from './addProductToCart';

const renderProducts = (shoes) => {
  let shoesCopy = shoes.slice()
  const container = document.querySelector(`.collections-list`)
  
  const renderProductCard = (productInfo) => {
    const renderStar = (rating) => {
      const innerHTML = []
      for (let i = 5; i >= 1; i--) {
        let strElement = `<input class="star-rating__input" id="star-rating-${i}" type="radio" name="rating" value="${i}"/>
        <label class="star-rating__ico fa fa-star-o fa-lg ${rating > i ? `star-rating__ico--active` : ``}" for="star-rating-${i}" title="${i} out of 5 stars"></label>`
        innerHTML.push(strElement)
      }
      return innerHTML.join('')
    }

    const renderStars = () => {
      return (
        `<div class="star-rating">
            <div class="star-rating__wrap">
              ${renderStar(productInfo.rating)}
            </div>
          </div>`)
    }

    const renderOverlay = () => {
      return (
        `<div class="product-info__overlay overlay">
          <div class="overlay__details">${SVG_ICONS.eye}</div>
          <div class="overlay__cart">${SVG_ICONS.bag}</div>
          <div class="overlay__done">${SVG_ICONS.done}</div>
        </div>`)
    }

    const newElement = document.createElement(`div`)
    newElement.classList.add(`collections-list__item`, `product-info`)
    newElement.innerHTML = `
        <div class="product-info__image">
          <img src="/assets/img/content/collection${productInfo.numberImage}.png">
        </div>
        <div class="product-info__name">${productInfo.name}</div>
        <div class="product-info__price">
          ${productInfo.isSale ? 
            `<div class="price-old">$${productInfo.oldPrice}</div>
            <div class="price-new">$${productInfo.price}<span>.00</span></div>` : `$${productInfo.price}<span>.00</span>`}
        </div>
        <div class="product-info__grade">
          ${renderStars()}
        </div>
          ${renderOverlay()}`

    return newElement;
  } 

  const init = () => {
    container.innerHTML = ``
    shoesCopy.forEach(item => {
      container.append(renderProductCard(item))
    })
    starsRating()
    showProductDetails()
    addProductToCart()
  }

  init()
}


export default renderProducts;