import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getProductDetail: state.products.getProductDetail,
    errorProductDetail: state.products.errorProductDetail,
  }
}

const DetailProductComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Name</td>
          <td width="10">:</td>
          <td>{props.getProductDetail.name}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default connect(mapStateToProps, null)(DetailProductComponent);
