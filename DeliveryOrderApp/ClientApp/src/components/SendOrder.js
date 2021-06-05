import React, { Component } from 'react';

//export class SendOrder extends Component {
//    static displayName = SendOrder.name;

//    constructor() {
//        super();
//        this.state = { name: '', email: '' }
//    }

//    handleChange = event => {
//        this.setState({ [event.target.name]: event.target.value })
//    }
//    handleSubmit = event => {
//        event.preventDefault();
//        console.log("User name : " + this.state.name)
//        console.log("User Email : " + this.state.email)
//        const url ="https://jsonplaceholder.typicode.com/users/"
//        const data = { name: this.state.name, email: this.state.email }
//        fetch(url, {
//            method: 'POST',
//            body: JSON.stringify(data), // data can be `string` or {object}!
//            headers: { 'Content-Type': 'application/json' }
//        })
//        .then(res => res.json())
//        .catch(error => console.error('Error: ', error))
//        .then(response => console.log('Success: ', response)); }

//    render(){
//        return (
//        <form onSubmit={this.handleSubmit}>
//            <input type="text" name="name" onChange={this.handleChange} />
//            <input type="email" name="email" onChange={this.handleChange} />
//            <input type="submit" value="Add user" /> </form>)
//    }
//}

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
        console.log("User name : " + this.state.name)
        console.log("User Email : " + this.state.email)
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
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="senderCity" onChange={this.handleChange} />
                    <input type="text" name="senderAddress" onChange={this.handleChange} />
                    <input type="text" name="recipientCity" onChange={this.handleChange} />
                    <input type="text" name="recipientAddress" onChange={this.handleChange} />
                    <input type="number" name="cargoWeight" onChange={this.handleChange} />
                    <input type="date" name="pickUpDate" onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
