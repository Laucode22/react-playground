import React, { Component } from 'react';
import './MenuItem.css';
class MenuItem extends Component {
    render() {
        return (
            <li className='li'>
             <a href={this.props.route} className='link'>
                 {this.props.children}
             </a>
            </li>
        );
    }
}

export default MenuItem;