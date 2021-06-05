import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchOrders } from './components/FetchOrders';
import { SendOrder } from './components/SendOrder';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render () {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/make-order' component={SendOrder} />
                <Route path='/order-list' component={FetchOrders} />
            </Layout>
        );
    }
}
