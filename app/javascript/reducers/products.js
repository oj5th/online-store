import {
  GET_PRODUCTS_LIST,
  GET_PRODUCT_DETAIL,
  POST_PRODUCT_CREATE,
  PUT_PRODUCT_EDIT,
} from "../actions/productAction";

let initialState = {
  getProductsList: false,
  errorProductsList: false,
  getProductDetail: false,
  errorProductDetail: false,
  getResponDataProduct: false,
  errorResponDataProduct: false,
  title: "Online Store",
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return {
        ...state,
        getProductsList: action.payload.data,
        errorProductsList: action.payload.errorMessage,
      }

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        getProductDetail: action.payload.data,
        errorUserDerail: action.payload.errorMessage,
      }

    case POST_PRODUCT_CREATE:
      return {
        ...state,
        getResponDataProduct: action.payload.data,
        errorResponDataProduct: action.payload.errorMessage
      }

    case PUT_PRODUCT_EDIT:
      return {
        ...state,
        getResponDataProduct: action.payload.data,
        errorResponDataProduct: action.payload.errorMessage,
      }

    default:
      return state;
  }
}

export default products;
