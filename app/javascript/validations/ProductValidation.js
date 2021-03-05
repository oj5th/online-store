const ProductValidation = (values) => {
  const errors = {};

  if (!values.sku || values.sku === "") {
    errors.sku = "SKU is required."
  }

  if (!values.name || values.name === "") {
    errors.name = "Name is required."
  }

  if (!values.details || values.details === "") {
    errors.details = "Details is required."
  }

  if (!values.price || values.price === "") {
    errors.price = "Price is required."
  }

  if (!values.status || values.status === "") {
    errors.status = "Status is required."
  }

  return errors
}

export default ProductValidation;
