import React, { Component } from 'react'

// 定义数组变量
// const users = [
//     { username: 'Jerry', age: 21, gender: 'male' },
//     { username: 'Tomy', age: 22, gender: 'male' },
//     { username: 'Lily', age: 19, gender: 'female' },
//     { username: 'Lucy', age: 20, gender: 'female' }
// ]

class User extends Component {
    render() {
        const {user} = this.props

        return (
            <div>
                <div key={user.username}>name: {user.username}</div>
                <div key={user.gender}>gender: {user.gender}</div>
                <div key={user.age}>age: {user.age}</div>
                <hr/>
            </div>
        )
    }
}

export default User