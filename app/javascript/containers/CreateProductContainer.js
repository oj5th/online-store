import React, { Component } from "react";
import { Container } from "reactstrap";
import FormComponent from "../components/Products/FormComponent";
import { connect } from "react-redux";
import { postProductCreate } from "../actions/productAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataProduct: state.products.getResponDataProduct,
    errorResponDataProduct: state.products.errorResponDataProduct,
    productAdded: state.products
  }
}

class CreateProductContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postProductCreate(data));
  }

  render() {
    if (this.props.getResponDataProduct || this.props.errorResponDataProduct) {
      if (this.props.errorResponDataProduct) {
        swal(
          "Failed!",
          "Check all inputs!!!!",
          "error"
        )
      } else {
        debugger
        swal(
          "Success",
          "Product added!",
          "success"
        ).then(() => {
          this.props.history.push('/detail/'+this.props.errorResponDataProduct.id)
        })
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
