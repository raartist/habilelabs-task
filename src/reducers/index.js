import { SET_API_DATA } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_API_DATA:
      return { data: action.payload };
    default:
      return state;
  }
}
