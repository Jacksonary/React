import React, { Component } from 'react'

/**
 * 负责接受用户输入信息
 * 包含表单域和发布按钮
 */
class CommentInput extends Component {
    constructor() {
        super()
        // 利用状态变量存储值
        this.state = {
            username: '',
            content: ''
        }
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        {/* 将状态变量设置到输入框 */}
                        <input value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                        />
                    </div>
                    <div className='comment-field'>
                        <span className='comment-field-name'>评论内容：</span>
                        <div className='comment-field-input'>
                            <textarea value={this.state.content}
                                onChange={this.handleContentChange.bind(this)}
                            />
                        </div>
                    </div>
                    <div className='comment-field-button'>
                        <button onClick={this.handleSubmit.bind(this)}>发布</button>
                    </div>
                </div>
            </div>
        )
    }

    // 处理用户名变化，将输入框的值设置到状态变量中，如果不设，输入框中的值将无法变化
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    // 处理评论内容变化，将输入值设置到文本域中
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    // 处理提交评论的逻辑
    handleSubmit() {
        if(this.props.onSubmit) {
            const {username, content} = this.state;
            this.props.onSubmit({username, content})
        }
        // 将评论内容栏清空
        this.setState({content: ''})
    }
}

export default CommentInput