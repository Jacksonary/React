// 引入React和React.js的组件父类Component
import React, { Component } from 'react';
import './index.css';

class Title extends Component {

    constructor() {
        super()
        this.state = {
            isBarking: false,
            isRunning: false
        }
    }

    bark() {
        console.info("dog is barking")
        this.setState({isBarking: true})
        this.run()
    }

    run() {
        console.info("dog is running")
        this.setState({isRunning: true})
    }

    render() {
        return (
            <div onClick={this.bark.bind(this)}>Title Component</div>
        )
    }
}

export default Title