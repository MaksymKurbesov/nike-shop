const openMenu = () => {
  const menuButton = document.querySelector(`.header-main__menu`),
        menuOpened = document.querySelector(`.menu-opened`),
        closeButton = document.querySelector(`.menu-close`);

  menuButton.addEventListener(`click`, (evt) => {
    menuOpened.style.marginLeft = `0px`
    document.body.style.overflow = `hidden`;
    document.body.style.marginRight = `15px`
  })

  closeButton.addEventListener(`click`, (evt) => {
    menuOpened.style.marginLeft = `-600px`
    document.body.style.overflow = ``
    document.body.style.marginRight = `0px`
  })

  menuOpened.addEventListener(`click`, (evt) => {
    if (evt.target.tagName === 'A') {
      evt.preventDefault()
      menuOpened.style.marginLeft = `-600px`
      document.body.style.overflow = ``
      document.body.style.marginRight = `0px`
    }
  })
}

export default openMenu;