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
                    <table className="table">
                        <tbody>
                            <tr key={order.id}>
                                <th scope="row">Order number</th>
                                <td>{order.id}</td>
                            </tr>
                            <tr>
                                <th scope="row">Sender city</th>
                                <td>{order.senderCity}</td>
                            </tr>
                            <tr>
                                <th scope="row">Sender address</th>
                                <td>{order.senderAddress}</td>
                            </tr>
                            <tr>
                                <th scope="row">Recipient city</th>
                                <td>{order.recipientCity}</td>
                            </tr>
                            <tr>
                                <th scope="row">Recipient address</th>
                                <td>{order.recipientAddress}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cargo weight</th>
                                <td>{order.cargoWeight}</td>
                            </tr>
                            <tr>
                                <th scope="row">Pick up date</th>
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

        if (this.state.orders.length == 0) {
            contents = 'No orders';
        }

        return (
            <div>
                <h2 id="tabelLabel">Order list</h2>
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
