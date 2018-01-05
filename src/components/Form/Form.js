import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colors: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submit({
            name: this.props.formData.name,
            colors: this.props.formData.colors
        })
    }

    handleChange = (e) => {
        var colors = this.state.colors.slice()
        if(e.target.checked) {
            colors.push(e.target.value)
        } else {
            colors.splice(colors.indexOf(e.target.value), 1)
        }
        this.setState({
            colors
        })
        this.props.grabColors(colors)
    }

    render() {
        let ColorToggleButtons = this.props.formData.defaultColors.map((color, key) => (
            <div key={key}><label><input onChange={(e) => this.handleChange(e)} type="checkbox" value={color} />{color}</label></div>
        ))

        return (
            <form className="Form" onSubmit={this.handleSubmit}>
              <FormGroup
                controlId="formBasicText"
                validationState={this.props.formData.validationState}
              >
                <ControlLabel>Add new product</ControlLabel>
                <FormControl
                  type="text"
                  value={this.props.formData.name}
                  placeholder="Enter text"
                  onChange={this.props.validate}
                />
                <FormControl.Feedback />
                <HelpBlock>4-8 characters, only numbers and <strong>English</strong> letters allowed</HelpBlock>
              </FormGroup>
              <FormGroup>
                  <FormGroup>
                      {ColorToggleButtons}
                  </FormGroup>
              </FormGroup>
              <FormGroup>
                <Button type="submit" disabled={!this.props.formData.isFormValid}    bsStyle="success">
                  Submit
                </Button>
              </FormGroup>
            </form>
        );
    }
}


export default Form;