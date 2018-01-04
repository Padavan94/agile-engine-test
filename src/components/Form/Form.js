import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import {connect} from "react-redux";
import {addProduct, getProducts} from "../../actions/actions";

class Form extends Component {



  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
        <form className="Form" onSubmit={this.props.addProduct}>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Add new product</ControlLabel>
            <FormControl
              type="text"
              value={this.props.form.name}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>4-8 characters, only numbers and letters allowed</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ToggleButtonGroup type="checkbox" defaultValue={[1]}>
              <ToggleButton value={1}>Red</ToggleButton>
              <ToggleButton value={2}>Green</ToggleButton>
              <ToggleButton value={3}>Blue</ToggleButton>
            </ToggleButtonGroup>
          </FormGroup>
          <FormGroup>
            <Button type="submit" disabled="this.props.form.isFormValid" bsStyle="success">
              Submit
            </Button>
          </FormGroup>
        </form>
    );
  }
}

function mapStateToProps (state) {
  return {
    form: state.form
  }
}

function mapDispatchToProps(dispatch) {
    return({
        addProduct: (product) => {dispatch(addProduct(product))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);