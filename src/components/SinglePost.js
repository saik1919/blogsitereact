import React, { Component } from 'react';
import { Header, Card, Loader } from 'semantic-ui-react'
import Navigation from './Navigation';
import axios from 'axios';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = { thisPost: [] };
    }
    componentDidMount() {
        axios
            .get(`//jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then((response) => {
                this.setState((prevState) => ({
                    thisPost : response.data
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="blogContainer">
                {this.state.thisPost ? (
                        <div className="blogContainer">
                            <Navigation />
                            <Header as='h1'>{this.state.thisPost.title}</Header>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Description>
                                        {this.state.thisPost.body}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                ) : <Loader inverted>Loading</Loader>}
            </div>
        );
    }
}

export default SinglePost;