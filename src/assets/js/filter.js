import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import renderProducts from './renderProducts';
import sortByType from './sortByType';
import { SHOES } from './mock/shoes';

const filter = () => {
  let shoesCopy = SHOES.slice()
  const filterButton = document.querySelector(`.filter__button`)
  const filterBody = document.querySelector(`.filter__body`)
  const filterElement = document.querySelector(`.filter__range`)
  const filterFrom = document.querySelector(`.filter__from`)
  const filterTo = document.querySelector(`.filter__to`)
  const sortByNameButtonAtoZ = document.querySelector(`.filter__name-A`);
  const sortByNameButtonZtoA = document.querySelector(`.filter__name-Z`);
  const sortByRatingHighest = document.querySelector(`.filter__rating-high`);
  const sortByRatingLowest = document.querySelector(`.filter__rating-low`);
  const showAllProductsButton = document.querySelector(`.collections-viewAllProduct`);
  const priceInputElements = [filterFrom, filterTo];
  const filterElements = [sortByNameButtonAtoZ, sortByNameButtonZtoA, sortByRatingHighest, sortByRatingLowest]


  noUiSlider.create(filterElement, {
    start: [0, 370],
    connect: true,
    range: {
        'min': 0,
        'max': 370
    }
  })

  filterElement.noUiSlider.on('update', function (values, handle) {
    priceInputElements[handle].value = values[handle];
  });


  filterButton.addEventListener(`click`, () => {
    filterBody.classList.toggle(`filter__body--active`)
  })

  const setSortTypeHandler = (elements, event) => {
    elements.forEach(item => {
      item.addEventListener(event, (evt) => {
        const sortType = evt.target.getAttribute(`data-sortType`)
        renderProducts(sortByType(shoesCopy, sortType))
      })  
    })
  }

  setSortTypeHandler(filterElements, `click`)
  
  filterElement.noUiSlider.on(`change`, (evt) => {
    renderProducts(sortByType(shoesCopy, `price`, evt[0], evt[1]))
  })

  showAllProductsButton.addEventListener(`click`, () => {
    shoesCopy = shoesCopy.concat(shoesCopy)
    renderProducts(shoesCopy)
    showAllProductsButton.remove()
  })
}

export default filter;