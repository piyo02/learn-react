import React, {Component} from 'react';
import axios from 'axios';

import './DetailPost.css';

class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3004/posts/${id}`)
            .then(resp => {
                let post = resp.data;
                this.setState({
                    post: {
                        title: post.title,
                        body: post.body,
                    }
                })
            })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.post.title}</p>
                <p>{this.state.post.body}</p>
            </div>
        );
    }
}

export default DetailPost;