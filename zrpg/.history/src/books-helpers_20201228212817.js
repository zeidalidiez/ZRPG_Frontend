export const findBook = (titles = [], titleId) =>
  titles.find(title => title.id === titleId)
  
