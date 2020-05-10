import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import CardPost from '../../../component/CardPost/CardPost';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
        },
        isUpdate: false
    }

    componentDidMount() {
        this.getPostsAPI()
    }

    getPostsAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then(resp => {
                this.setState({
                    post: resp.data
                })
            })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        
        if(!this.state.isUpdate) {
            let timestamp = new Date().getTime();
            formBlogPostNew["id"] = timestamp;
        }
        
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        this.state.isUpdate ? this.putDataToAPI() : this.postDataToAPI();
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then( result => this.getPostsAPI())
            .catch( error => console.log(error) )
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then( result => {
                this.getPostsAPI();
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        userId: 1,
                        id: 1,
                        title: '',
                        body: ''
                    },
                })
            } )
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then( result => this.getPostsAPI() )
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" 
                            name="title" 
                            placeholder="add title"
                            value={this.state.formBlogPost.title}
                            onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body"
                                cols="30" 
                                rows="10" 
                                value={this.state.formBlogPost.body}
                                placeholder="add blog content" 
                                onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <CardPost key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;