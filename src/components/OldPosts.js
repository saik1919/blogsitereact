import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import Navigation from './Navigation';

class OlderPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="blogContainer">
                <Navigation activeItem="OlderPosts" />
                <Header as='h1'>Older Post</Header>   
            </div>
        );
    }
}

export default OlderPosts;