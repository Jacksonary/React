import React, { Component } from 'react'

/**
 * 评论组件
 */
class Comment extends Component {

    static defaultProps = {
        comment: {
            username: 'username',
            content: 'content'
        }
    }

    render() {
        return (
            <div className='comment'>
                {/* <div className='comment-user'> */}
                {/* 从props中获取属性 */}
                <span>{this.props.comment.username}</span>：<span>{this.props.comment.content}</span>
                {/* </div> */}
            </div>
        )
    }
}

export default Comment