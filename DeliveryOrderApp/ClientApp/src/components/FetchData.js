import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

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
                  <tr key={order.orderNumber}>
                    <td><p>Order number: {order.orderNumber}</p></td>
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
              </table>)}
          </div>
        
      //<table className='table table-striped' aria-labelledby="tabelLabel">
      //  <thead>
      //    <tr>
      //      <th>Date</th>
      //      <th>Temp. (C)</th>
      //      <th>Temp. (F)</th>
      //      <th>Summary</th>
      //    </tr>
      //  </thead>
      //  <tbody>
      //    {orders.map(order =>
      //      <tr key={order.date}>
      //        <td>{order.orderNumber}</td>
      //        {/*<td>{order.temperatureC}</td>*/}
      //        {/*<td>{order.temperatureF}</td>*/}
      //        {/*<td>{order.summary}</td>*/}
      //      </tr>
      //    )}
      //  </tbody>
      //</table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderOrdersTable(this.state.orders);

    return (
      <div>
        <h1 id="tabelLabel" >Orders</h1>
        <p>This component demonstrates fetching data from the server.</p>
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
