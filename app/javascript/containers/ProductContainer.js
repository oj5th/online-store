import React, { Component } from "react";
import TableComponent from "../components/Products/TableComponent";
import { connect } from "react-redux";
import { getProductsList } from "../actions/productAction";

class ProductContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsList());
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    )
  }
}

export default connect()(ProductContainer);
