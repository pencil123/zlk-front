import React, { Component } from 'react'
import Subscribe from '../subscribe/subscribe';
import MySearch from '../search/search';
import Likes from '../likes/likes';
import Tag from '../tag/tag';

export class MySider extends Component {
    render() {
        return (
            <div>
                <Subscribe />
                <MySearch />
                <Likes />
                <Tag />
            </div>
        )
    }
}

export default MySider
