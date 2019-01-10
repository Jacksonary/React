import React, { Component } from 'react';
import Comment from './Comment';

/**
 * 评论列表，由评论组件组成
 */
class CommentList extends Component {

    // 防止父组件不传值的情况出现异常
    // static defaultProps = {
    //     comments: [
    //         { username: '王二狗', content: '不错' }
    //     ]
    // }

    render() {
        // 模拟数据
        // const comments = [
        //     { username: '王二狗', content: '不错' },
        //     { username: '李大牛', content: '还行' },
        //     { username: '孙三喵', content: '勉强' },
        // ]

        return (
            <div>
                {
                    // comments.map((comment, i) => {
                    //     return (
                    //         // i是为了处理Each child in an array or iterator should have a unique "key" prop异常
                    //         <div key={i}>
                    //             {comment.username}: {comment.content}
                    //         </div>
                    //     )
                    // })

                    // comments.map((comment, i) => <Comment comment={comment} key={i} />)

                    // 从props中获取数据
                    // this.props.comments.map((comment, i) => <Comment comment={this.props.comment} key={i} />)
                    this.props.comments.map((comment, key) => 
                        <Comment comment={comment} key={key}/>
                    )
                }
            </div>
        )

    }
}

export default CommentList