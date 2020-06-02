const showProductDetails = () => {
  const productImgs = document.querySelectorAll('.product-info__image'),
        productElems = document.querySelectorAll('.product-info__overlay');

  productImgs.forEach(item => {
    item.addEventListener('click', (e) => {
      productElems.forEach(item => {
        item.classList.remove('product-info__overlay--active')
      })
      e.target.closest('.product-info').querySelector('.overlay').classList.add('product-info__overlay--active', 'animate__animated', 'animate__fadeIn');
    })
  })

  productElems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.remove('product-info__overlay--active')
    })
  })
} 

export default showProductDetails;