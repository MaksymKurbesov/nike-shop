const addProductToCart = () => {
  const addToCartButtons = document.querySelectorAll(`.overlay__cart`);
  const cartContainerElement = document.querySelector(`.header-main__cart--opened`);
  const cartCloseButton = document.querySelector(`.header-main__cart--opened span`);
  const cartButton = document.querySelector(`.header-main__cart`)
  const cartCountElement = document.querySelector(`.cart-count`)

  let cartCount = 0;

  cartCountElement.textContent = cartCount;

  cartButton.addEventListener(`click`, (evt) => {
    cartContainerElement.classList.add(`header-main__cart--opened--active`)
  })

  cartCloseButton.addEventListener(`click`, () => {
    cartContainerElement.classList.remove(`header-main__cart--opened--active`)
  })

  addToCartButtons.forEach(item => item.addEventListener(`click`, (evt) => {
    evt.stopImmediatePropagation()
    const clickedProduct = evt.currentTarget.closest(`.product-info`);
    const isSalePrice = clickedProduct.querySelector(`.price-new`)
    const newElement = document.createElement(`div`)
    newElement.classList.add(`cart-item`)
    newElement.innerHTML = `
      <div class="cart-image">
        <img src="${clickedProduct.querySelector(`.product-info__image img`).getAttribute(`src`)}">
      </div> 
      <div class="cart-name">${clickedProduct.querySelector(`.product-info__name`).textContent}</div>
      <div class="cart-price">${isSalePrice ? clickedProduct.querySelector(`.price-new`).textContent : clickedProduct.querySelector(`.product-info__price`).textContent}</div>
    `
    cartContainerElement.append(newElement)

    cartCount++
    cartCountElement.textContent = cartCount;
  }))


}

export default addProductToCart;