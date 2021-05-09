import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  headlines: [],
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_BOOKS:
      return Object.assign({}, state, {
        isLoading: true
      });
  default:
    return state;
  }
};