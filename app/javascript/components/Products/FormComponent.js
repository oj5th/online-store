import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import ProductValidation from "../../validations/ProductValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
)

const mapStateToProps = (state) => {
  return {
    initialValues : {
      sku: state.products.getProductDetail.sku,
      name: state.products.getProductDetail.name,
      details: state.products.getProductDetail.details,
      price: state.products.getProductDetail.price,
      status: state.products.getProductDetail.status,
    }
  }
}

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="sku"
                component={renderField}
                label="SKU: "
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Name: "
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="details"
                component={renderField}
                label="Details: "
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="price"
                component={renderField}
                label="Price: "
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="status"
                component={renderField}
                label="Status: "
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    )
  }
}

FormComponent = reduxForm({
  form: "formCreateProduct",
  validate: ProductValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
