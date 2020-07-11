const sortByType = (array, sortType, from, to) => {
  switch (sortType) {
    case `A-Z`:
      return array.sort((a, b) => {
        let nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1
        } 
        if (nameA > nameB) {
          return 1
        }
        return 0    
      })
    case `Z-A`:
      return array.sort((a, b) => {
        let nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
        if (nameA > nameB) {
          return -1
        } 
        if (nameA < nameB) {
          return 1
        }
        return 0    
      })
    case `highest`:
      return array.sort((a, b) => {
        let ratingA = a.rating,
            ratingB = b.rating;
        if (ratingA > ratingB) {
          return -1
        } 
        if (ratingA < ratingB) {
          return 1
        }
        return 0    
      })
    case `lowest`:
      return array.sort((a, b) => {
        let ratingA = a.rating,
            ratingB = b.rating;
        if (ratingA < ratingB) {
          return -1
        } 
        if (ratingA > ratingB) {
          return 1
        }
        return 0    
      })
    case `price`: 
      return array
        .filter(item => item.price > from)
        .filter(item => item.price < to)   
  }
}

export default sortByType;
