import React, { Component } from 'react'

class Users extends Component {
    state = {
        users:[
            {
                id:'1',
                login:'mojombo',
                avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            },

            {
                id:'2',
                login:'defunkt',
                avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/defunkt'
            },

            {
                id:'3',
                login:'pjhyett',
                avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/pjhyett'
            },

            {
                id:'4',
                login:'wycats',
                avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
                html_url: 'https://github.com/wycats'
            },

        ]
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <div>{user.login}</div>
                    // <div>{}</div>
                ))}
            </div>
        )
    }
}

export default Users
