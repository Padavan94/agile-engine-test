import React from 'react';
import {Button, Panel } from 'react-bootstrap';
import './Product.scss';

export default function Product(props) {
    let colors = props.product.colors.map((color, key) => {
        return <div className="Product__colors-item" key={key}>{color}</div>
    })

    return (
        <div className="Product">
            <Panel className="Product__inner" header={props.product.name}>
                <div className="Product__button text-right">
                    <Button bsStyle="danger">Remove</Button>
                </div>
                {colors}
            </Panel>
        </div>
    )
}