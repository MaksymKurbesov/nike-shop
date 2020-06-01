const showProductDetails = () => {
  const productImgs = document.querySelectorAll('.product-info__image'),
        productElems = document.querySelectorAll('.product-info__overlay');

  productImgs.forEach(item => {
    item.addEventListener('click', (e) => {
      e.target.closest('.product-info').querySelector('.overlay').classList.add('product-info__overlay--active');
    })
  })

  productElems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.remove('product-info__overlay--active')
    })
  })
} 

export default showProductDetails;