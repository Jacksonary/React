// 引入React和React.js的组件父类Component
import React, { Component } from 'react';
import './index.css';

class Header extends Component {

    doClick(v1, v2, v3, v4) {
        console.info(v1, v2, v3, v4)
    }

    bark() {
        console.log('bark')
        this.run()
    }

    run() {
        console.log('run')
    }

    render() {
        return (
            <div>
                <h1 onClick={this.doClick.bind(this, 'Hello', 'test')}>React Hello!</h1>
                {/* <Title /> */}
                {/* 点击Dog后先咬再跑 */}
                <h1 onClick={this.bark.bind(this)}>Dog</h1>
            </div>
        )
    }
}

export default Header

// ReactDOM.render(
//     <Header />,
//     document.getElementById('root')
// )