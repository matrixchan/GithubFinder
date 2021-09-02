import React, { Component } from 'react'

export class User extends Component {

    componentDidMount(){
        console.log('test');
        this.props.getUser(this.props.match.params.login);
    }

    render() {
        // console.log('test:',this.props.match.params.login);

        // this.props.getUser(this.props.match.params.login);


        const { name, avatar_url,location,bio,blog,login,html_url,followers,following,public_repos,public_gists,hireable} = this.props.user;
        const {loading } = this.props;
        return (
            <div>{name}</div>
        )
    }
}

export default User; 
