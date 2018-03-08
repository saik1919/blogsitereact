import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeItem: this.props.activeItem
         };
    }
    render() {
        return (
            <Menu secondary>
                <Menu.Item as={Link} to='' name='Home' active={this.state.activeItem === 'Home'}>
                    Home
                </Menu.Item>
                <Menu.Item as={Link} to='/old' name='OlderPosts' active={this.state.activeItem === 'OlderPosts'}>
                    Older Posts
                </Menu.Item>
                <Menu.Item as={Link} to='/thismonth' name='ThisMonth' active={this.state.activeItem === 'ThisMonth'}>
                    This Month
                </Menu.Item>
                <Menu.Item as={Link} to='/addPost' name='Add A Blog' active={this.state.activeItem === 'AddPost'}>
                    Add A Blog
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;