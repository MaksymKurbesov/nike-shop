const changeColorShoes = () => {
  const colorButtons = document.querySelectorAll('.shoes-colors span');

  colorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const et = event.target,
            imageParent = et.closest('.bestOffer-info').previousElementSibling;          
      
      let newImg = document.createElement('img')
      newImg.classList.add('animate__animated', 'animate__fadeIn')
      newImg.style.setProperty('--animate-duration', '1s')
      newImg.setAttribute('src', `/assets/img/general/nike${et.getAttribute('id')}.png`)  
      imageParent.append(newImg)
      newImg.previousElementSibling.classList.add('animate__fadeOut')

      setTimeout(() => {
        for (let i = 0; i <= imageParent.childNodes.length-2; i++) {
          imageParent.removeChild(imageParent.querySelectorAll('img')[i])
        }
      }, 1000);
    })
  })
}

export default changeColorShoes;