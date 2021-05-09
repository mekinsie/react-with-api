import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  books: [],
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_BOOKS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        books: action.books.books
      });
    case c.GET_BOOKS_FAILURE:
    return Object.assign({}, state, {
      isLoading: false,
      error: action.error
    });
    default:
      return state;
  }
};