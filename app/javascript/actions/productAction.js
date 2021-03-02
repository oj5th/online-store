import axios from "axios";

export const GET_PRODUCTS_LIST    = "GET_PRODUCTS_LIST";
export const GET_PRODUCT_DETAIL   = "GET_PRODUCT_DETAIL";
export const POST_PRODUCT_CREATE  = "POST_PRODUCT_CREATE";
export const PUT_PRODUCT_EDIT     = "PUT_PRODUCT_EDIT";

export const getProductsList = () => {
  return (dispatch) => {
    axios
      .get("/products.json")
      .then(function (response) {
        dispatch({
          type: GET_PRODUCTS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PRODUCTS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
  }
}

export const getProductDetail = (id) => {
  return (dispatch) => {
    axios
      .get("/products/"+id+".json")
      .then(function (response) {
        dispatch({
          type: GET_PRODUCT_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(function (error) {
        dispatch({
          type: GET_PRODUCT_DETAIL,
          errorMessage: error.message,
        })
      })
  }
}

export const postProductCreate = (data) => {
  return (dispatch) => {
    axios
      .post("products", data)
      .then(function (response) {
        console.log(response);
        dispatch({
          type: POST_PRODUCT_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(function (error) {
        dispatch({
          type: POST_PRODUCT_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
  }
}

export const putProductUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put("products/"+id, data)
      .then(function (response) {
        console.log(response)
        dispatch({
          type: PUT_PRODUCT_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(function (error) {
        dispatch({
          type: PUT_PRODUCT_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
  }
}

export const deleteProduct = (id) => {
  return (dispatch) => {
    axios
      .detele("products/"+id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export const deleteDataProduct = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      }
    })

    dispatch({
      type: POST_PRODUCT_CREATE,
      payload: {
        data: false,
        errorMessage: false
      }
    })
  }
}
