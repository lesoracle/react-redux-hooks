import * as types from "../actions/actionTypes";

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_BOOK:
      return [...state, { ...action.book }];
    default:
      return state;
  }
}
