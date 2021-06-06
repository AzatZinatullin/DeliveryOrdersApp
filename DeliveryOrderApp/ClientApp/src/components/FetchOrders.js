import React, { Component } from 'react';

export class FetchOrders extends Component {
    static displayName = FetchOrders.name;

    constructor(props) {
        super(props);
        this.state = { orders: [], loading: true };
    }

    componentDidMount() {
        this.populateOrdersData();
    }

    static renderOrdersTable(orders) {
        return (
            <div>
                {orders.map(order =>
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead>
                            <tr key={order.id}>
                                <td>Order number: {order.id}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sender city</td>
                                <td>{order.senderCity}</td>
                            </tr>
                            <tr>
                                <td>Sender address</td>
                                <td>{order.senderAddress}</td>
                            </tr>
                            <tr>
                                <td>Recipient city</td>
                                <td>{order.recipientCity}</td>
                            </tr>
                            <tr>
                                <td>Recipient address</td>
                                <td>{order.recipientAddress}</td>
                            </tr>
                            <tr>
                                <td>Cargo weight</td>
                                <td>{order.cargoWeight}</td>
                            </tr>
                            <tr>
                                <td>Pick up date</td>
                                <td>{order.pickUpDate}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : FetchOrders.renderOrdersTable(this.state.orders);

        return (
            <div>
                <h1 id="tabelLabel" >Order list.</h1>
                {contents}
            </div>
        );
    }

    async populateOrdersData() {
        const response = await fetch('order');
        const data = await response.json();
        this.setState({ orders: data, loading: false });
    }
}
