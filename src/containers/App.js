import React, { Component } from 'react';
import FormContainer from '../containers/FormContainer';
import ProductContainer from '../containers/ProductContainer';
import { Grid, Panel } from 'react-bootstrap';
import './App.scss';

class App extends Component {
  render() {
    return (
        <Panel header="Agile Engine test task">
            <Grid>
              <FormContainer />
              <ProductContainer />
            </Grid>
        </Panel>
    );
  }
}

export default App;
