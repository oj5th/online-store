import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import FormComponent from "../components/Products/FormComponent";
import { getProductDetail, putProductUpdate } from "../actions/productAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataProduct: state.products.getResponDataProduct,
    errorResponDataProduct: state.products.errorResponDataProduct,
  }
}

class EditProductContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putProductUpdate(data, this.props.match.params.id))
  }

  render() {
    if (this.props.getResponDataProduct || this.props.errorResponDataProduct) {
      if (this.props.errorResponDataProduct) {
        swal(
          "Failed!",
          this.props.errorResponDataProduct,
          "error"
        );
      } else {
        swal(
          "Product Updated!",
          "Test",
          "success"
        );
      }
    }

    return (
      <Container>
        <h1>Edit Product</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    )
  }
}

export default connect(mapStateToProps, null)(EditProductContainer);
