import React, { Component } from 'react'
import Subscribe from '../subscribe/subscribe';
import MySearch from '../search/search';
import Likes from '../likes/likes';
import Tag from '../tag/tag';
import FirendLink from '../firendLink/firendLink';

export class MySider extends Component {
    render() {
        return (
            <div style={{padding:"5px 3px"}}>
                <Subscribe />
                <MySearch />
                <Likes />
                <Tag />
                <FirendLink />
            </div>
        )
    }
}

export default MySider
