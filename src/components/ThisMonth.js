import React, { Component } from 'react';
import { Header, Item } from 'semantic-ui-react'
import Navigation from './Navigation';
import { Link } from 'react-router-dom'

class ThisMonth extends Component {
    constructor(props) {
        super(props);
        this.state = { thisMonthPosts : [] };
    }
    componentDidMount() {
        const thisMonth = JSON.parse(localStorage.getItem('thisMonth'));
        this.setState((prevState) => ({
            thisMonthPosts : thisMonth
        }));
    }
    render() {
        return (
            <div className="blogContainer">
                <Navigation activeItem="ThisMonth" />
                <Header as='h1'>This Month's Post</Header>   
                <Item.Group divided>
                {
                    this.state.thisMonthPosts.map((post,i) => {
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

export default ThisMonth;