import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import Navigation from './Navigation';

class NoMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="blogContainer">
                <Navigation />
                <Header as='h1'>404: No Match Found</Header>   
            </div>
        );
    }
}

export default NoMatch;