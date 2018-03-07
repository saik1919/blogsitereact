import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import Navigation from './Navigation';

class HeaderSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Navigation activeItem={this.props.activeItem} />
                <Header as='h1'>{this.props.title}</Header>    
            </div>
        );
    }
}

export default HeaderSection;