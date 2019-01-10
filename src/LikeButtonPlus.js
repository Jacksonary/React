import React, { Component } from 'react';

class LikeButtonPlus extends Component {

    static defaultProps = {
        text: {
            likedText: '取消', 
            unlikedText: '点赞'
        }
    }

    constructor() {
        super()
        this.state = { isLiked: false }
    }
    handleClickOnLikeButton() {
        // this.props.text = {
        //     likedText: '取消2', 
        //     unlikedText: '点赞2'
        // }
        // this.props.text.likedText = '取消2'
        // this.props.text.unlikedText = '点赞2'
        this.setState({
            isLiked: !this.state.isLiked,
        })
        if (this.props.onClick2) {
            this.props.onClick2()
        }
    }
    render() {
        // const likedText = this.props.likedText || "取消"
        // const unlikedText = this.props.unlikedText || "点赞"
        // const text = this.props.text || { likedText: '取消', unlikedText: '点赞' }
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {/* 自动调用，React 会自动判断父组件标签中是否传入对应的属性，有就用，没有就用默认的 */}
                {this.state.isLiked ? this.props.text.likedText : this.props.text.unlikedText} 👍
            </button>
        )
    }
}

export default LikeButtonPlus