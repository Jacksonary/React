import React, { Component } from 'react';
import Screen from './Screen';

class Computer extends Component {
    constructor() {
        super()
        this.state = {
            status: 'off'
        }
    }

    handleComputerStatue() {
        console.info('按开关', this.state.status)
        this.setState((preState) => {
            return {
                status:  this.state.status === 'off' ? 'on' : 'off'
            }
        })
        console.info('按完开关', this.state.status)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleComputerStatue.bind(this)}>开关</button>
                <Screen showContent={this.state.status === 'on' ? '显示器亮了' : '显示器关了'} />
            </div>
        )
    }
}

export default Computer 