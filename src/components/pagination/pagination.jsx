import React, { Component } from 'react'
import { Pagination } from 'antd';

export class MyPagination extends Component {
    render() {
        return (
            <div>
                <Pagination defaultCurrent={6} total={500} />
            </div>
        )
    }
}

export default MyPagination
