import booksReducer from '../../reducers/books-reducer'

describe('booksReducer', () => {
  const defaultState = {
    isLoading: false,
    books: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(booksReducer(defaultState, {type: null})).toEqual({
      isLoading: false,
      books: [],
      error: null
    });
  });
});