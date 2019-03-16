import React, { Component } from 'react';

class NewsSinglePage extends Component {
    constructor(props) {
        super(props);
        this.state = {post:[]};
    }

    getPost = () => {
        axios.get("http://localhost:3001/api/posts")
        .then(res => {
            this.setState({
                post: res.data.post
            });
        })
    }

    componentDidMount() {
        this.getPost();
    }
    render() {
        const { post } = this.state;
        return(
            <div className="container">
                <div className="news_single_page">
                    <h1>New</h1>
                </div>
            </div>
        )
    }
}
export default NewsSinglePage;