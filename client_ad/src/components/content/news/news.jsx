import React, { Component } from 'react';
import axios from "axios";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {users:[]};
    }
    componentDidMount() {
        // using fetch
        // fetch("http://localhost:3001/api/users")
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //       this.setState({
        //         users: result.users
        //       });
        //     })

        // using axios
        axios.get("http://localhost:3001/api/users")
        .then(res => {
            this.setState({
                users: res.data.users
            });
        })
    }
    render() {
        const { users } = this.state;
        return(
        <div className="news">
            news
            <h1>Our users</h1>
            {users.map(user => (
                <div key={user.name}>
                {user.name} {user.sername}
                </div>
            ))}
        </div>
        )
    }
}
export default News;