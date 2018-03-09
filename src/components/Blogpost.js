import React, { Component } from 'react';
import { Header, Item } from 'semantic-ui-react'
import Navigation from './Navigation';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Blogpost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            blogposts : []
         };
    }
    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const blogPost = response.data.filter((post, i) => {
                    return post.id >= 1 && post.id <= 50
                });
                this.setState((prevState) => ({
                    blogposts : blogPost
                }));
                localStorage.setItem("totalCount",response.data.length);
                
                const olderPost = response.data.filter((post, i) => {
                    return post.id >= 51 && post.id <= 100
                });
                localStorage.setItem("olderPost",JSON.stringify(olderPost))
                
                const thisMonth = response.data.filter((post, i) => {
                    return post.id >= 1 && post.id <= 20
                });
                localStorage.setItem("thisMonth",JSON.stringify(thisMonth))
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="blogContainer">
                <Navigation activeItem="Home" />
                <Header as='h1'>Blog Home</Header>   
                    <Item.Group divided>
                    {
                        this.state.blogposts.map((post,i) => {
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

export default Blogpost;