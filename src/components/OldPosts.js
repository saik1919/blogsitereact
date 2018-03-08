import React, { Component } from 'react';
import { Header, Item } from 'semantic-ui-react'
import Navigation from './Navigation';
import { Link } from 'react-router-dom'

class OlderPosts extends Component {
    constructor(props) {
        super(props);
        this.state = { olderPostsList : [] };
    }
    componentDidMount() {
        const oldPost = JSON.parse(localStorage.getItem('olderPost'));
        this.setState((prevState) => ({
            olderPostsList : oldPost
        }));
    }
    render() {
        return (
            <div className="blogContainer">
                <Navigation activeItem="OlderPosts" />
                <Header as='h1'>Older Post</Header>   
                <Item.Group divided>
                {
                    this.state.olderPostsList.map((post,i) => {
                        return (
                            <Item key={i}>
                            <Item.Content>
                                <Item.Header as={Link} to={`/post/${post.id}`}>{post.id}: {post.title}</Item.Header>
                            </Item.Content>
                        </Item>
                        )
                    })
                }
                </Item.Group>
            </div>
        );
    }
}

export default OlderPosts;