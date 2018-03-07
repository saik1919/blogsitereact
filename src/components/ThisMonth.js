import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import Navigation from './Navigation';

class ThisMonth extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="blogContainer">
                <Navigation activeItem="ThisMonth" />
                <Header as='h1'>This Month's Post</Header>   
            </div>
        );
    }
}

export default ThisMonth;