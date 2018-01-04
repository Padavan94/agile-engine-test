import React, { Component } from 'react';
import Form from '../components/Form/Form';
import ProductList from '../components/Product/ProductList';
import { Grid, Panel } from 'react-bootstrap';
import './App.scss';

class App extends Component {
  render() {
    return (
        <Panel header="Agile Engine test task">
            <Grid>
              <Form />
              <ProductList />
            </Grid>
        </Panel>
    );
  }
}

export default App;
