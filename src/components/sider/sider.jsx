import React, { Component } from 'react'
import Subscribe from '../subscribe/subscribe';
import Likes from '../likes/likes';

export class MySider extends Component {
    render() {
        return (
            <div>
                <Subscribe />
                <Likes />
            </div>
        )
    }
}

export default MySider
