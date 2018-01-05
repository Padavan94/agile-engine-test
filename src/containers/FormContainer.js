import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addProduct, getFormValidate, grabFormColors} from '../actions/actions';
import Form from '../components/Form/Form'

class FormContainer extends Component {

  render() {
    return (
        <div>
            <Form
                formData={this.props.formData}
                validate={this.props.validateForm}
                submit={this.props.addProduct}
                grabColors={this.props.grabColors}
            />
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    formData: state.form
  }
}

function mapDispatchToProps(dispatch) {
    return({
        addProduct: (product) => {dispatch(addProduct(product))},
        validateForm: (e) => {dispatch(getFormValidate(e))},
        grabColors: (indexes) => {dispatch(grabFormColors(indexes))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);