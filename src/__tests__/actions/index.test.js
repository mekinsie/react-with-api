import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('book reducer actions', () => {

  it('requestBooks should create REQUEST_BOOKS action', () => {
    expect(actions.requestBooks()).toEqual({
      type: c.REQUEST_BOOKS
    });
  });

    it('getBooksSuccess should create GET_BOOKS_SUCCESS action', () => {
    const books = "A book";
    expect(actions.getBooksSuccess(books)).toEqual({
      type: c.GET_BOOKS_SUCCESS,
      books
    });
  });

  it('getBooksFailure should create GET_BOOKS_FAILURE action', () => {
    const error = "An error";
    expect(actions.getBooksFailure(error)).toEqual({
      type: c.GET_BOOKS_FAILURE,
      error
    });
  });

});