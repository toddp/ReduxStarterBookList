//state argument is not application state,
//but the state this reducer is listening for.

// note default null for state if undefined
export default function(state = null, action) {
  console.log("state: " + state);
  console.log("action: " + action.payload);
  switch(action.type) {
      case 'BOOK_SELECTED':
        return action.payload; //selected book
  }
  //if we don't want to handle this action
  return state;
}
