import React, { Component } from 'react';
import Navigation from './Navigation';
import { Header, Form, Input, TextArea, Button, Message } from 'semantic-ui-react';
import axios from 'axios';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            success: false,
            error: false
        };
        this.addThisPost = this.addThisPost.bind(this);
    }
    addThisPost(e) {
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const newId = parseInt(localStorage.getItem("totalCount"), 10) + 1;
        axios
            .post(`//jsonplaceholder.typicode.com/posts`,
            {
                title: title,
                body: desc,
                userId: 1
            })
            .then((response) => {
                this.setState((prevState) => ({
                    success : true
                }));
                const newpost = {
                    title: title,
                    body: desc,
                    userId: 1,
                    id: newId
                };
                localStorage.setItem("newposts",JSON.stringify(newpost));
                localStorage.setItem("totalCount",newId);
            })
            .catch((error) => {
                this.setState((prevState) => ({
                    error : true
                }));
            });
    }
    render() {
        return (
            <div className="blogContainer">
                <Navigation activeItem="AddPost" />
                <Header as='h1'>Add a Post</Header>   
                <Form onSubmit={this.addThisPost} success={this.state.success} error={this.state.error}>
                    <Form.Field id='title' control={Input} placeholder='Title' />
                    <Form.Field id='desc' control={TextArea} placeholder='Description' />
                    <Form.Field id='form-button-control-public' control={Button} content='Add a Post' />
                    <Message
                    success={true}
                    content="Your Post has been added."
                    />
                    <Message
                    error
                    content='There is some problem with this post.'
                    />
                </Form>
            </div>
        );
    }
}

export default AddPost;