import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeItem: this.props.activeItem
         };
    }
    render() {
        return (
            <Router>
                <Menu>
                    <Menu.Item as={Link} to='' name='Home' active={this.state.activeItem === 'Home'}>
                        Home
                    </Menu.Item>
                    <Menu.Item as={Link} to='/old' name='OlderPosts' active={this.state.activeItem === 'OlderPosts'}>
                        Older Posts
                    </Menu.Item>
                    <Menu.Item as={Link} to='/thismonth' name='ThisMonth' active={this.state.activeItem === 'ThisMonth'}>
                        This Month
                    </Menu.Item>
                </Menu>
            </Router>
        );
    }
}

export default Navigation;