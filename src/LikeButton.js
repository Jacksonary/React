import React, { Component } from 'react';
import './index.css';

class LikeButton extends Component {
    constructor() {
        super()
        this.state = { isLiked: false, name: 'Tony', count: 0 }
    }

    handleClickOnLikeButton() {
        // 更新当前实例中 state 中的 isLiked 变量
        // this.setState({
        //     isLiked: !this.state.isLiked,
        //     name: 'jack'
        // })
        console.log(this.state.isLiked)
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
        // this.setState({count: this.state.count + 1})
        // this.setState({count: this.state.count + 1})
        console.log(this.state.isLiked)
        console.log(this.state.count)
    }

    render() {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'} 👍
            </button>
        )
    }
}

export default LikeButton