import React, { Component } from "react";
import { Container } from "reactstrap";
import FormComponent from "../components/Products/FormComponent";
import { connect } from "react-redux";
import { postProductCreate } from "../actions/productAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getReponDataProduct: state.products.getReponDataProduct,
    errorResponDataProduct: state.products.errorResponDataProduct
  }
}

class CreateProductContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postProductCreate(data));
  }

  render() {
    if (this.props.getReponDataProduct || this.props.errorResponDataProduct) {
      if (this.props.errorResponDataProduct) {
        swal(
          "Failed!",
          this.props.errorResponDataProduct,
          "error"
        )
      } else {
        swal(
          "User Created!",
          "Name: " + this.props.getReponDataProduct.name,
          "success"
        )
      }
    }

    return (
      <Container>
        <h1>Create Product</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    )
  }
}

export default connect(mapStateToProps, null)(CreateProductContainer);
