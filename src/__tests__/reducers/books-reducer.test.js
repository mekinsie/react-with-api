import booksReducer from '../../reducers/books-reducer'
import * as c from './../../actions/ActionTypes';

let action;

describe('booksReducer', () => {
  const defaultState = {
    isLoading: false,
    books: [],
    error: null
  };

  const loadingState = {
    isLoading: true,
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

  test('successfully getting books should change isLoading to false and update books', () => {
    const books = "A Book";
    action = {
      type: c.GET_BOOKS_SUCCESS,
      books
    };
    expect(booksReducer(loadingState, action)).toEqual({
      isLoading: false,
      books: "A Book",
      error: null
    });
  });

  test('failing to get books should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_BOOKS_FAILURE,
      error
    };
    expect(booksReducer(loadingState, action)).toEqual({
      isLoading: false,
      books: [],
      error: 'An error'
    });
  });

});