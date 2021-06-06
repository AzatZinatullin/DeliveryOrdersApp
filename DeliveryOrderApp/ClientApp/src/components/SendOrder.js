import React, { Component } from 'react';

export class SendOrder extends Component {
    static displayName = SendOrder.name;

    constructor(props) {
        super(props);
        this.state = {
            senderCity: '',
            senderAddress: '',
            recipientCity: '',
            recipientAddress: '',
            cargoWeight: '',
            pickUpDate: ''
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const url ="/order"
        const data = {
            senderCity: this.state.senderCity,
            senderAddress: this.state.senderAddress,
            recipientCity: this.state.recipientCity,
            recipientAddress: this.state.recipientAddress,
            cargoWeight: this.state.cargoWeight,
            pickUpDate: this.state.pickUpDate
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .catch(error => console.error('Error: ', error))
        .then(response => console.log('Success: ', response)); 

        alert("The order has been created");
    }

    render() {
        return (
            <div>
                <h2>Make order</h2>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Sender city</label>
                        <input type="text" className="form-control" name="senderCity" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Sender address</label>
                        <input type="text" className="form-control" name="senderAddress" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Recipient city</label>
                        <input type="text" className="form-control" name="recipientCity" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Recipient address</label>
                        <input type="text" className="form-control" name="recipientAddress" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Cargo weight</label>
                        <input type="number" className="form-control" step="0.01" name="cargoWeight" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Pick up date</label>
                        <input type="date" className="form-control" name="pickUpDate" onChange={this.handleChange} required />
                    </div >

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        );
    }
}
