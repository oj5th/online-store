import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getProductDetail } from "../actions/productAction";
import DetailProductComponent from "../components/Products/DetailProductComponent";

class DetailProductContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductDetail(this.props.match.params.id))
  }

  render() {
    return (
      <Container>
        <h1>Product Details</h1>
        <DetailProductComponent />
      </Container>
    )
  }
}

export default connect()(DetailProductContainer);
