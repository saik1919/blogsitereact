import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import Navigation from './Navigation';

class Blogpost extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="blogContainer">
                <Navigation activeItem="Home" />
                <Header as='h1'>Blog Home</Header>   
            </div>
        );
    }
}

export default Blogpost;