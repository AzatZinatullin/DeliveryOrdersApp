import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render () {
        return (
            <div>
                <p>This is a web application for accepting a delivery order.</p>
                <p>To make an order please go to the <b>Make order</b> tab.</p>
                <p>You can view the list of orders in the <b>Order list</b> tab.</p>
            </div>
        );
    }
}
