import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import CardPost from '../../component/CardPost/CardPost';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log(json)
        //         this.setState({
        //             post: json
        //         })
        //     })
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp => {
                this.setState({
                    post: resp.data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <CardPost key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;