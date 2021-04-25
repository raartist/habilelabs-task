import axios from "axios";
import { SET_API_DATA } from "./types";

export function fetchApiData() {
  return function (dispatch) {
    return axios
      .get(
        "http://my-json-server.typicode.com/habilelabs/fake-products/products"
      )
      .then(({ data }) => {
        dispatch(setApiData(data));
      });
  };
}

function setApiData(data) {
  return {
    type: SET_API_DATA,
    payload: data,
  };
}
