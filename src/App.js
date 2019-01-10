import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import LikeButton from './LikeButton';
import Title from './Title';
import LikeButtonPlus from './LikeButtonPlus';
import Computer from './Computer/Computer';
import User from './User/User';
import Test from './test/Test';
import CommentInput from './comment/CommentInput';
import CommentList from './comment/CommentList';

const users = [
  { id: 1, username: 'Jerry', age: 21, gender: 'male' },
  { id: 2, username: 'Tomy', age: 22, gender: 'male' },
  { id: 3, username: 'Lily', age: 19, gender: 'female' },
  { id: 4, username: 'Lucy', age: 20, gender: 'female' }
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      text: {
        likedText: 'unliked',
        unlikedText: 'liked'
      },
      // 存放评论数据
      comments: []
    }
  }

  handleClickOnChange() {
    this.setState({
      text: {
        likedText: '取消2',
        unlikedText: '点赞2'
      }
    })
  }

  // 回调获取新的评论数据
  handleSubmitComment(comment) {
    console.log(comment);
    // 参数校验
    if (!comment) return;
    if (!comment.username) return alert('please input username');
    if (!comment.content) return alert('please input content');
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments
    })
    console.info(this.state.comments)
  }

  renderTest(test1, test2) {
    const flag = true
    return flag ? test1 : test2
  }

  render() {
    const isJack = false
    const N = 5

    const usersElements = []

    for (let user of users) {
      usersElements.push(
        <div>
          <div>name: {user.username}</div>
          <div>gender: {user.gender}</div>
          <div>age: {user.age}</div>
          <hr />
        </div>
      )
    }

    // 定义函数组件
    const FunctionComponent = (props) => {
      const fc = (event) => alert('This is a Function Component!')
      return (
        <div>
          <h1>函数组件</h1>
          <button onClick={fc}>点我测试</button>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          {/* <div id="root"></div> */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to React, {3 + 1}
          </p>
          <p>
            Hello
            {
              isJack ? <strong>, Jack</strong> : null
            }
          </p>
          <p>
            {/* 调用函数 */}
            renderTest,
            {
              this.renderTest(
                <strong>test1</strong>,
                <strong>test2</strong>
              )
            }
          </p>
          <p>
            message number,
            {
              N > 0 ? <span>有{N}条未读消息</span> : <span>没有未读消息</span>
            }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Header />
        <LikeButton />
        <Title />
        <LikeButtonPlus onClick2={() => console.info('Click on like button!')} text={{ likedText: "like", unlikedText: "unlike" }} />
        <div>
          <h3>测试修改</h3>
          <LikeButtonPlus text={this.state.text} />
          <button onClick={this.handleClickOnChange.bind(this)}>修改props</button>
        </div>
        <div>
          <h3>电脑开关机</h3>
          <Computer />
        </div>
        <FunctionComponent />
        {/* <div>
          <h3>列表渲染</h3>
          {[
            <span>test1</span>,
            <span>test2</span>,
            <span>test3</span>
          ]}
        </div>

        <div>
          <h3>手动渲染数据</h3>
          <div>
            {usersElements}
          </div>
        </div> */}

        {/* <div>
          <h3>使用map渲染自动渲染</h3>
          {
            users.map((user, i) => {
              return (
                <div key={i}>
                  <div>name: {user.username}</div>
                  <div>age: {user.age}</div>
                  <div>gender: {user.gender}</div>
                  <hr />
                </div>
              )
            })
          }
        </div> */}

        <div>
          <h3>map渲染每个抽离的组件</h3>
          {
            users.map((user, i) => {
              return (
                <div key={i}>
                  <User user={user} key={i} />
                </div>
              )
            })
          }
        </div>

        <div>
          <Test />
          <hr />
        </div>

        <div className='wrapper'>
          <h3>评论功能</h3>
          <hr />
          {/* 评论操作区，绑定函数 */}
          <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
          {/* 评论列表 */}
          <div>评论列表</div>
          <CommentList comments={this.state.comments} />
        </div>

      </div >

    );
  }
}

export default App;
