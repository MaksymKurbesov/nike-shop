const showProductDetails = () => {
  const productImgs = document.querySelectorAll('.product-info__image'),
        productElems = document.querySelectorAll('.product-info__overlay'),
        overlayCart = document.querySelectorAll('.overlay__cart');

  productImgs.forEach(item => {
    item.addEventListener('click', (e) => {
      productElems.forEach(item => {
        item.classList.remove('product-info__overlay--active')
      })
      e.target.closest('.product-info').querySelector('.product-info__overlay').classList.add('product-info__overlay--active');
    })
  })

  overlayCart.forEach(item => {
    item.addEventListener(`click`, (evt) => {
      console.log(evt.currentTarget.closest(`.product-info`))
      evt.currentTarget.parentNode.querySelector(`.overlay__done`).style.display = `flex`
      evt.currentTarget.style.display = `none`
    })
  })

  productElems.forEach(item => {
    item.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`product-info__overlay--active`)) {
        item.classList.remove('product-info__overlay--active')
      }
    })
  })

} 

export default showProductDetails;