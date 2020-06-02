const starsRating = () => {
  const starsElems = document.querySelectorAll('.star-rating__ico');

  starsElems.forEach(star => {
    star.addEventListener('click', (event) => {
      const et = event.target
      et.parentNode.querySelectorAll('.star-rating__ico').forEach(item => {
        item.classList.remove('star-rating__ico--active')
      })
      if (!et.previousElementSibling.checked) {
        const allChildrenInputs = et.parentNode.querySelectorAll('.star-rating__input'),
              valueClickedStar = et.previousElementSibling.value,
              gradeElem = et.closest('.product-info__grade');
        try {
          gradeElem.setAttribute('data-grade', valueClickedStar);
        } catch (error) {
          
        }
        allChildrenInputs.forEach(item => {
          if (item.value <= valueClickedStar) {
            item.nextElementSibling.classList.add('star-rating__ico--active')
          }
        })   
      }
    })
  })
}

export default starsRating;