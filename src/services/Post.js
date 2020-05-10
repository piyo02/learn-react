import axios from 'axios';
import { RootPath, OnlineRoot } from './Config';

const Post = (path, data, root = RootPath) => {
    const promise = new Promise( (resolve, reject) => {
        axios.post(`${root}/${path}`, data)
            .then( result => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    } )
    return promise;
}

export default Post;