import booksReducer from '../../reducers/books-reducer'
import * as c from './../../actions/ActionTypes';

let action;

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

  test('requesting books should successfully change isLoading from false to true', () =>{
    action = {
      type: c.REQUEST_BOOKS
    };
    expect(booksReducer(defaultState, action)).toEqual({
      isLoading: true,
      books: [],
      error: null
    });
  });

});