import * as c from './ActionTypes';

export const requestBooks = () => ({
  type: c.REQUEST_BOOKS
});

export const getBooksSuccess = (books) => ({
  type: c.GET_BOOKS_SUCCESS,
  books: books
});

export const getBooksFailure = (error) => ({
  type: c.GET_BOOKS_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestBooks);
    return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`).then(response => {
      if (!response.ok){ throw Error(response.statusText) }
      else { return response.json() }
    }).then((jsonifiedResponse) => {
      dispatch(getBooksSuccess(jsonifiedResponse.results));
    }).catch((error) => {
      dispatch(getBooksFailure(error));
    });
  }
}