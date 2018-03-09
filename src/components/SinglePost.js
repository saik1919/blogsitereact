import React, { Component } from 'react';
import { Header, Card, Loader } from 'semantic-ui-react'
import Navigation from './Navigation';
import axios from 'axios';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            thisPost: [],
            postDeleteLoad: <Loader />
        };
        this.deleteThisPost = this.deleteThisPost.bind(this);
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
    deleteThisPost(){
        axios
            .delete(`//jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then((response) => {
                this.setState((prevState) => ({
                    thisPost : "",
                    postDeleteLoad : "This post is now deleted."
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="blogContainer">
                {
                    (this.state.thisPost !== "") ? (
                        <div className="blogContainer">
                            <Navigation />
                            <Header as='h1'>{this.state.thisPost.title}</Header>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Description>
                                        {this.state.thisPost.body}
                                    </Card.Description>
                                    <Card.Meta onClick={this.deleteThisPost}>Delete This Post</Card.Meta>
                                </Card.Content>
                            </Card>
                        </div>
                    ) : (
                        <div className="blogContainer">
                            <Navigation />
                            <Header as='h1'>{this.state.thisPost.title}</Header>
                            {this.state.postDeleteLoad}
                        </div>
                    )
                }
            </div>
        );
    }
}

export default SinglePost;