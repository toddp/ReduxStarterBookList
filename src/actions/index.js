export function selectBook(book){
  //console.log('A book has been selected: ', book.title);
  //selectBook is an Action Creator, needs to return an action,
  //i.e. an object with a 'type' property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
