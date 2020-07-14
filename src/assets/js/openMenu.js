const openMenu = () => {
  const menuButton = document.querySelector(`.header-main__menu`),
        menuOpened = document.querySelector(`.menu-opened`),
        closeButton = document.querySelector(`.menu-close`);

  menuButton.addEventListener(`click`, () => {
    menuOpened.style.marginLeft = `0px`
    document.body.style.overflow = `hidden`;
    document.body.style.marginRight = `15px`
  })

  closeButton.addEventListener(`click`, () => {
    if (screen.width <= 766) {
      menuOpened.style.marginLeft = `-900px`
      document.body.style.overflow = ``
      document.body.style.marginRight = `0px`
    } else {
      menuOpened.style.marginLeft = `-900px`
      document.body.style.overflow = ``
      document.body.style.marginRight = `0px`
    }
  })

  menuOpened.addEventListener(`click`, (evt) => {
    if (evt.target.tagName === 'A') {
      evt.preventDefault()
      menuOpened.style.marginLeft = `-900px`
      document.body.style.overflow = ``
      document.body.style.marginRight = `0px`
    }
  })
}

export default openMenu;